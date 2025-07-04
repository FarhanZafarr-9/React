import { useEffect, useState } from 'react'
import { groceries } from './Data';
import { RiSubtractLine } from "react-icons/ri";
import { FaShoppingCart, FaArrowLeft } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const ListSearch = ({ isDarkMode }) => {

    const [search, setSearch] = useState('');
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [filters, setFilters] = useState([]);
    const [activeFilters, setActiveFilters] = useState([]);
    const [checkout, setCheckout] = useState(false)

    const cName = `flex items-center justify-around w-full`;
    const borderT = `border-t-[0.75px] ${isDarkMode ? 'border-t-[#55555555]' : 'border-t-[#aaa]'}`;
    const spanClass = `flex font-semibold text-sm px-2 py-2 w-[20%] select-none`;
    const liClass = `text-sm px-2  w-[20%] ${borderT} select-none `

    useEffect(() => {
        setItems(groceries);
        setFilteredItems(groceries);

        const typeSet = new Set();
        groceries.forEach(item => {
            if (Array.isArray(item.type)) {
                item.type.forEach(t => typeSet.add(t));
            } else if (item.type) {
                typeSet.add(item.type);
            }
        });

        setFilters(Array.from(typeSet));
    }, []);

    useEffect(() => {
        if (search) {
            const filtered = (items || []).filter(item =>
                item.name.toLowerCase().includes(search.toLowerCase())
            );
            setFilteredItems(filtered);
        } else {
            setFilteredItems(items);
        }
    }, [search, items]);

    useEffect(() => {
        if (activeFilters.length > 0) {
            const filterNames = activeFilters.map(f => f.name);

            const filtered = (items || []).filter(item => {
                if (Array.isArray(item.type)) {
                    return filterNames.every(t => item.type.includes(t));
                } else if (item.type && filterNames.length === 1) {
                    return filterNames.includes(item.type);
                }
                return false;
            });
            setFilteredItems(filtered);
        } else {
            setFilteredItems(items);
        }
    }, [activeFilters, items]);

    function addItem(name, price) {
        setCartItems(prevCart => {
            const found = prevCart.find(item => item.name === name);
            if (found) {
                return prevCart.map(item =>
                    item.name === name
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevCart, { name, quantity: 1, price }];
            }
        });
    }

    function subtractItem(name) {
        setCartItems(prevCart => {
            const found = prevCart.find(item => item.name === name);
            if (found) {
                if (found.quantity > 1) {
                    return prevCart.map(item =>
                        item.name === name
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    );
                } else {
                    return prevCart.filter(item => item.name !== name);
                }
            }
            return prevCart;
        });
    }

    function addFilter(name) {
        setActiveFilters(prevActiveFilters => {
            const found = prevActiveFilters.find(item => item.name === name);
            if (!found) {
                return [...prevActiveFilters, { name }];
            }
            return prevActiveFilters;
        });
    }

    function subtractFilter(name) {
        setActiveFilters(prevActiveFilters => {
            const found = prevActiveFilters.find(item => item.name === name);
            if (found) {
                return prevActiveFilters.filter(item => item.name !== name);
            }
            return prevActiveFilters;
        });
    }

    function isFilterActive(name) {
        return !!activeFilters.find(filter => filter.name === name);
    }

    function getOpacity(name) {
        return !!cartItems.find(item => item.name === name);
    }

    function getQuantity(name) {
        const found = cartItems.find(item => item.name === name);
        return found ? found.quantity : 0;
    }

    function highlightText(text, highlight) {
        if (!highlight) return text;
        const idx = text.toLowerCase().indexOf(highlight.toLowerCase());
        if (idx === -1) return text;
        return (
            <>
                {text.substring(0, idx)}
                <span className={`rounded-sm ${isDarkMode ? 'bg-[#fefefe] text-black' : 'bg[#181818] text-white'}`}>
                    {text.substring(idx, idx + highlight.length)}
                </span>
                {text.substring(idx + highlight.length)}
            </>
        );
    }

    return (
        !checkout ? (<div className={`flex flex-col justify-between min-w-[600px] max-w-[600px] min-h-[600px] max-h-[700px] rounded-lg border-[0.75px] ${isDarkMode ? 'bg-[#181818] border-[#555555] text-white' : 'bg-[#cfcfcf] border-[#aaa] text-black'} px-3 py-2`}>

            <span
                className={`text-md font-semibold pb-3 mb-4 ${isDarkMode ? 'border-b-[#55555555]' : 'border-b-[#aaa]'} border-b-2`}
            >
                Search List
            </span>

            <div className='flex items-center justify-between w-full px-1 gap-3'>

                <input
                    type='text'
                    className={`w-[90%] outline-none font-semibold focus:outline-none flex items-center justify-between gap-2 rounded-3xl border-[0.75px] ${isDarkMode ? 'bg-[#222222] border-[#555555] text-white' : 'bg-[#e0e0e0] border-[#aaa] text-black'} px-4 py-1 my-4`}
                    onChange={e => setSearch(e.target.value)}
                    placeholder='Search'
                />

                <span className={`w-[10%] flex items-center justify-between px-2 py-1 rounded-md border-[0.75px] ${isDarkMode ? 'bg-[#222222] border-[#555555] text-white' : 'bg-[#e0e0e0] border-[#aaa] text-black'}`}>

                    <span className='font-bold text-sm'>{cartItems.reduce((total, item) => total + item.quantity, 0)}</span>
                    <FaShoppingCart size={16} color={`${isDarkMode ? '#fefefe' : '#181818'}`} />

                </span>
            </div>

            <span className={`text-md font-semibold pb-3 px-2 py-3`}> Filters </span>
            <div className='flex justify-start items-center gap-3 flex-wrap mb-4 px-1'>
                {filters.map((filter) => (
                    <span
                        className={`flex border-[0.75px] rounded-md justify-between items-center gap-2 text-sm py-0.5 px-2 cursor-pointer select-none transition-all duration-300 ease-in-out
                        ${isDarkMode
                                ? isFilterActive(filter)
                                    ? 'bg-[#dfdfdf] border-[#aaa] text-black font-semibold'
                                    : 'bg-[#202020] border-[#55555555] text-white'
                                : isFilterActive(filter)
                                    ? 'bg-[#181818] border-[#555555] text-white font-semibold'
                                    : 'bg-[#dfdfdf] border-[#aaa] text-black'
                            }
                      `}
                    >
                        <p onClick={() => addFilter(filter)}>{filter}</p>
                        {isFilterActive(filter) && <RxCross2 size={14} onClick={() => subtractFilter(filter)} />}
                    </span>
                ))}
            </div>

            <div className={`flex items-center justify-between ${borderT} pt-3 mx-1 mb-2`}>

                <span className={`text-md font-semibold pb-3`}> List Info </span>
                <div className='flex items-center justify-end gap-3 mb-3'>
                    <span
                        className={` font-semibold text-sm ${isDarkMode ? 'bg-white/20 border-white/40' : 'bg-black/20 border-black/40'} px-2 flex rounded-sm border-[0.75px]  ${activeFilters.length > 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-all duration-300 ease-in-out cursor-pointer`}
                    >
                        {activeFilters.length}
                    </span>
                    <span
                        className={` font-semibold text-sm ${isDarkMode ? 'bg-white/20 border-white/40' : 'bg-black/20 border-black/40'} px-2 flex rounded-sm border-[0.75px]  ${activeFilters.length > 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-all duration-300 ease-in-out cursor-pointer`}
                        onClick={() => setActiveFilters([])}
                    >
                        Reset Filters
                    </span>
                    <span
                        className={` font-semibold text-sm ${isDarkMode ? 'bg-white/20 border-white/40' : 'bg-black/20 border-black/40'} px-2 flex rounded-sm border-[0.75px] transition-all duration-300 ease-in-out cursor-pointer`}
                        onClick={() => { }}
                    >
                        {`${filteredItems.length} / ${items.length}`}
                    </span>
                </div>
            </div>

            {filteredItems && filteredItems.length > 0 ? (
                <ul className={`px-6 py-2 max-h-auto w-full overflow-y-auto scrollbar-hidden border-[0.75px] rounded-md ${isDarkMode ? 'bg-[#202020] border-[#55555555] text-white' : 'bg-[#dfdfdf] border-[#aaa] text-black'}`}>
                    <li className={`${cName}`}>
                        <span className={` ${spanClass} w-[30%]`}>Name</span>
                        <span className={` ${spanClass} `}>Price</span>
                        <span className={` ${spanClass} `}>Quantity</span>
                        <span className={` ${spanClass} w-[30%] `}>Buy</span>
                    </li>
                    {filteredItems && filteredItems.map((item, idx) => (
                        <li key={idx} className={cName}>
                            <span className={`${liClass} w-[30%] py-1.5`}>{highlightText(item.name, search)}</span>
                            <span className={`${liClass} py-1.5`}>{item.price}</span>
                            <span className={`${liClass} py-1.5`}>{item.quantity}</span>
                            <span className={`${liClass} py-1 w-[30%] flex items-center justify-center gap-[5%]`}>
                                <button
                                    className={`px-2 w-[60%] ${isDarkMode ? 'bg-[#fefefe] border-[#aaa] text-black' : 'bg-[#181818] border-[#55555555] text-white'} text-xs py-1 font-semibold rounded-sm`}
                                    onClick={() => addItem(item.name, item.price)}
                                >
                                    Add to cart
                                </button>
                                <span
                                    className={`w-[17%] font-semibold text-sm ${isDarkMode ? 'bg-white/20 border-white/40' : 'bg-black/20 border-black/40'} px-2 flex rounded-sm border-[0.75px]  ${getOpacity(item.name) ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-all duration-300 ease-in-out select-none`}
                                    onClick={() => subtractItem(item.name)}
                                >
                                    {getQuantity(item.name)}
                                </span>
                                <span
                                    className={` w-[17%] bg-red-900/30 flex items-center justify-center rounded-sm border-[0.75px] border-red-600/40 ${getOpacity(item.name) ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-all duration-300 ease-in-out`}
                                    onClick={() => subtractItem(item.name)}
                                >
                                    <RiSubtractLine size={18} color='#ec2626' />
                                </span>
                            </span>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className={`flex text-sm font-semibold items-center justify-center px-6 py-2 mt-2 max-h-[75%] w-full border-[0.75px] rounded-md ${isDarkMode ? 'bg-[#202020] border-[#55555555] text-white' : 'bg-[#dfdfdf] border-[#aaa] text-black'}`}>
                    Either no ietms match these set of filters or no availability.
                </div>
            )}
            <button className={`flex justify-center items-center rounded-md  w-full ${!isDarkMode ? 'bg-[#181818] border-[#555555] text-white' : 'bg-[#e0e0e0] border-[#aaa] text-black'} font-semibold py-1 mt-4 mb-2`}
                onClick={() => {
                    setCheckout(!checkout);
                    setSearch('');
                    setActiveFilters([]);
                }}
            >
                Proceed
            </button>
        </div>) : (
            <div className={`flex flex-col justify-between min-w-[600px] max-w-[600px] min-h-[600px] max-h-[700px] rounded-lg border-[0.75px] ${isDarkMode ? 'bg-[#181818] border-[#555555] text-white' : 'bg-[#cfcfcf] border-[#aaa] text-black'} px-3 py-2`}>

                <div className={`flex items-center justify-between ${isDarkMode ? 'border-b-[#55555555]' : 'border-b-[#aaa] '} pb-2 mb-2 border-b-2 `}>
                    <span
                        className={`flex items-center justify-center text-md font-semibold `}
                        onClick={() => {
                            setCheckout(!checkout);
                            setSearch('');
                            setActiveFilters([]);
                        }}
                    >
                        <FaArrowLeft size={14} color={`${isDarkMode ? '#fefefe' : '#121212'}`} onClick={() => setCheckout(!checkout)} />
                    </span>
                    <span
                        className={`flex items-center justify-center text-md font-semibold `}
                    >
                        Checkout
                    </span>
                    <span />
                </div>

                {cartItems && cartItems.length > 0 && <ul className={`px-6 py-2 mt-2 max-h-[75%] w-full overflow-y-auto scrollbar-hidden border-[0.75px] rounded-md ${isDarkMode ? 'bg-[#202020] border-[#55555555] text-white' : 'bg-[#dfdfdf] border-[#aaa] text-black'}`}>
                    <li className={`${cName}`}>
                        <span className={` ${spanClass} w-[30%]`}>Name</span>
                        <span className={` ${spanClass} `}>Price</span>
                        <span className={` ${spanClass} `}>Quantity</span>
                        <span className={` ${spanClass} w-[30%] `}>Total Price</span>
                    </li>
                    {cartItems.map((item, idx) => (
                        <li key={idx} className={cName}>
                            <span className={`${liClass} w-[30%] py-1.5`}>{item.name}</span>
                            <span className={`${liClass} py-1.5`}>{item.price}</span>
                            <span className={`${liClass} py-1.5`}>{getQuantity(item.name)}</span>
                            <span className={`${liClass} py-1.5 w-[30%] `}>
                                {item.price * item.quantity}
                            </span>
                        </li>
                    ))}
                </ul>}

                <div>
                    {cartItems && cartItems.length > 0 ? (
                        <>
                            <div className={`flex items-center justify-center px-6 py-2 mt-2 max-h-[75%] w-full border-[0.75px] rounded-md ${isDarkMode ? 'bg-[#202020] border-[#55555555] text-white' : 'bg-[#dfdfdf] border-[#aaa] text-black'}`}>
                                <span className={`w-[70%] text-sm font-semibold px-1 tracking-wider`}>
                                    Total Bill
                                </span>
                                <span className='w-[30%] text-sm font-semibold px-2'>
                                    {cartItems.reduce((total, item) => total + item.quantity * item.price, 0)}
                                </span>
                            </div>

                            <button className={`flex justify-center items-center rounded-md  w-full ${!isDarkMode ? 'bg-[#181818] border-[#555555] text-white' : 'bg-[#e0e0e0] border-[#aaa] text-black'} font-semibold py-1 mt-4 mb-2`}>
                                Checkout
                            </button>
                        </>
                    ) : (
                        <div className={`flex text-sm font-semibold items-center justify-center px-6 py-2 mt-2 max-h-[75%] w-full border-[0.75px] rounded-md ${isDarkMode ? 'bg-[#202020] border-[#55555555] text-white' : 'bg-[#dfdfdf] border-[#aaa] text-black'}`}>
                            Cart is empty
                        </div>
                    )}
                </div>
            </div>
        )
    )
}

export default ListSearch;