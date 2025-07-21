import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const SB = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// 🟢 SIGNUP
app.post('/signup', async (req, res) => {
    const { name, age, email, country, city, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ success: false, error: 'Missing required fields' });
    }

    try {
        // Check if user already exists
        const { data: existingUser, error: checkErr } = await SB
            .from('users')
            .select('id')
            .eq('email', email)
            .maybeSingle();

        if (checkErr) throw checkErr;

        if (existingUser) {
            return res.status(409).json({ success: false, error: 'User already exists' });
        }

        const { data, error } = await SB
            .from('users')
            .insert([{ name, age, email, country, city, password }])
            .select()
            .single();

        if (error || !data) {
            return res.status(500).json({ success: false, error: 'Signup failed' });
        }

        return res.status(201).json({ success: true, user: data });
    } catch (err) {
        return res.status(500).json({ success: false, error: 'Server error during signup' });
    }
});

// 🟠 SIGNIN
app.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ success: false, message: 'Missing credentials' });
    }

    try {
        const { data, error } = await SB
            .from('users')
            .select('*')
            .eq('email', email)
            .eq('password', password)
            .single();

        if (error || !data) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }

        return res.status(200).json({ success: true, user: data });
    } catch (err) {
        return res.status(500).json({ success: false, message: 'Server error during signin' });
    }
});

app.listen(process.env.PORT, () => {
    console.log(`✅ Server running on http://localhost:${process.env.PORT}`);
});
