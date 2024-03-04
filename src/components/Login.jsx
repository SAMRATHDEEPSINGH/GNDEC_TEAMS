import React from 'react'

function Login() {
    return (
        <div>
            <div className='bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative'>
                <h1 className='text-5xl text-black font-bold text-center mb-6'>Login</h1>
                <form action="">
                <div className='relative my-4'>
                    <label htmlFor="" className='text-lg text-black font-bold'>Email adddress</label>
                    <input type="email"
                    placeholder='Enter Email' className='w-72 flex h-10 rounded-md border border-gray-200 bg-transparent px-3 py-2 text-lg placeholder:text-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'/>
                </div>
                <div className='relative my-4'>
                    <label htmlFor="" className='text-lg text-black font-bold'>Password</label>
                    <input type="password"
                    placeholder='Enter Password' className='w-72 flex h-10  rounded-md border border-gray-200 bg-transparent px-3 py-2 text-lg placeholder:text-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50' />
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-2 items-center'>
                        <input type="checkbox" name='' id='Remeber Me' />
                        <label htmlFor="Remeber Me">Remember Me</label>
                    </div>
                    <span className='text-yellow-200'>Forgot Password?</span>
                </div>
                <button className='w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300' type='submit'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
