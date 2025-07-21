export const signupUser = async (form) => {
    try {
        const res = await fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        });

        const data = await res.json();

        if (!res.ok || !data.success) {
            return { error: data.error || 'Signup failed' };
        }

        return { user: data.user };
    } catch (err) {
        return { error: 'Signup exception' };
    }
};

export const signinUser = async ({ email, password }) => {
    try {
        const res = await fetch('http://localhost:3000/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        const data = await res.json();

        if (!res.ok || !data.success) {
            return { error: data.message || 'Signin failed' };
        }

        return { success: true, user: data.user };
    } catch (err) {
        return { error: 'Signin exception' };
    }
};
