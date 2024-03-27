import React, { useState } from 'react'
import man from '../../assets/man.png'
import people from '../../assets/people.png'


function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [Msg,setMsg]=useState(false);

  const toggleMsg=()=>{
    setMsg(!Msg);
  }
  const toggleDropdown1 = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (action) => {
    // Handle Feature such as clear chat(admin only) and only admin button
    console.log("clicked", action);
    // Add logic here
  };
  const rooms = [
    {
      roomname: 'Mean',
      status: 'Available',
      img: people
    },
    {
      roomname: 'BigData',
      status: 'Available',
      img: people
    },
    {
      roomname: 'CyberSecurity',
      status: 'Available',
      img: people
    },
    {
      roomname: 'DataStructures',
      status: 'Available',
      img: people
    }
  ]
  return (
    <div className='flex'>
      <div className='w-[25%] h-screen bg-blue-50'>
        <div className='flex items-center my-8 mx-14'>
          <div className='border border-blue-300 p-[2px] rounded-full'><img src={man} /></div>
          <div className='ml-8'>
            <h3 className='text-2xl'>Sam</h3>
            <p className='text-lg font-light'>My Account</p>
          </div>
        </div>
        <hr />
        <div className='mx-14 mt-10'>
          <div className='text-gray-500 text-lg'>
            Messsages
          </div>
          <div>
            {
              rooms.map(({ roomname, status, img }) => {
                return (
                  <div className='flex items-center py-8 border-b border-b-gray-300'>
                    <div className='cursor-pointer flex items-center'>
                      <div><img src={img} width={60} height={60} /></div>
                      <div className='ml-6'>
                        <h3 className='text-lg font-semibold'>{roomname}</h3>
                        <p className='text-sm font-light text-gray-400'>{status}</p>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className='w-[50%] h-screen bg-white flex flex-col items-center'>
        <div className='w-[75%] bg-blue-50 h-[80px] my-14 rounded-full flex items-center px-14'>
          <div className='cursor-pointer'><img src={people} width={60} height={60} /></div>
          <div className='ml-6 mr-auto'>
            <h3 className='text-lg'>Mean</h3>
            <p className='text-sm font-light text-gray-400'>Online</p>
          </div>
          <div className='relative inline-block text-left'>
            <div>
              <button
                type='button'
                onClick={toggleDropdown1}
                className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dots-vertical" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                </svg>
              </button>
            </div>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-10">
                <ul className="py-1">
                  <li>
                    <button
                      onClick={() => handleItemClick('Clear Chat')}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      Clear Chat
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleItemClick('Only Admin')}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      Only Admin
                    </button>
                  </li>
                  {/* Add more items as needed */}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className='h-[75%] w-full overflow-y-auto scrollbar-webkit shadow-lg'>
          <div className='p-14'>
            <div className='max-w-[40%] bg-blue-50 rounded-b-xl rounded-tr-xl p-4 text-sm mb-6'>
              <div>
            <button className="top-0 right-0 flex items-center focus:outline-none ml-auto" type='button'
            onClick={toggleMsg}>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-chevron-down" width="15" height="15" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 11l-3 3l-3 -3" />
                <path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18z" />
              </svg>
              </button>
              </div>
              {Msg && (
              <div className="right-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-10 ml-auto">
                <ul className="py-1">
                  <li>
                    <button
                      onClick={() => handleItemClick('Edit')}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      Edit Message
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleItemClick('Delete')}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      Delete Message
                    </button>
                  </li>
                  {/* Add more items as needed */}
                </ul>
              </div>
            )}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, vitae. lorem50
              <div className="text-xs text-gray-400 responive right-2 bottom-2">
                {new Date().toLocaleString()} {/* Display current date and time */}
              </div>
            </div>
            <div className='max-w-[40%] bg-blue-600 rounded-b-xl rounded-tl-xl ml-auto p-4 text-white text-sm mb-6'>
              Lorem ipsum dolor sit amet.
              <div className="text-xs text-gray-400 responive right-2 bottom-2">
                {new Date().toLocaleString()} {/* Display current date and time */}
              </div>
            </div>
            <div className='max-w-[40%] bg-blue-50 rounded-b-xl rounded-tr-xl p-4 text-sm mb-6'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, vitae.
              <div className="text-xs text-gray-400 responive right-2 bottom-2">
                {new Date().toLocaleString()} {/* Display current date and time */}
              </div>
            </div>
            <div className='max-w-[40%] bg-blue-600 rounded-b-xl rounded-tl-xl ml-auto p-4 text-white text-sm mb-6'>
              Lorem ipsum dolor sit amet.
              <div className="text-xs text-gray-400 responive right-2 bottom-2">
                {new Date().toLocaleString()} {/* Display current date and time */}
              </div>
            </div>
            <div className='max-w-[40%] bg-blue-50 rounded-b-xl rounded-tr-xl p-4 text-sm mb-6'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, vitae.
              <div className="text-xs text-gray-400 responive right-2 bottom-2">
                {new Date().toLocaleString()} {/* Display current date and time */}
              </div>
            </div>
            <div className='max-w-[40%] bg-blue-600 rounded-b-xl rounded-tl-xl ml-auto p-4 text-white text-sm mb-6'>
              Lorem ipsum dolor sit amet.
              <div className="text-xs text-gray-400 responive right-2 bottom-2">
                {new Date().toLocaleString()} {/* Display current date and time */}
              </div>
            </div>
          </div>
        </div>
        <div className='p-14 w-full flex items-center'>
          <input type="text" placeholder='Enter your message...' className='w-[75%] border-0 p-3 shadow-lg rounded-full bg-blue-50 focus:ring-0 outline-none' inputClassName='p-4 border-0 shadow-lg rounded-full' />
          <div className='ml-4 p-3 cursor-pointer bg-blue-50 rounded-full'>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-send" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 14l11 -11" />
              <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
            </svg>
          </div>
          <div className='ml-4 p-3 cursor-pointer bg-blue-50 rounded-full'>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-paperclip" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className='w-[25%] h-screen bg-blue-50'></div>
    </div>
  )
}

export default Dashboard
