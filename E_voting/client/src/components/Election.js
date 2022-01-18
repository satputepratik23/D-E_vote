import React from "react";

const Election = () => {
  return (
    <div className='bg-purplebg bg-no-repeat pb-96'>
      <div className='flex pt-16 relative left-96    max-w-sm  px-2 mx-8'>
        <div className='bg-white px-6 rounded shadow-lg text-black w-full'>
          <h1 className='my-4 text-3xl text-center border-b-2'>
            Enter the Election Details
          </h1>
          <form method='POST'>
            <input
              type='text'
              className='block border border-grey-light w-full p-3 rounded mb-2'
              name='Election type'
              placeholder='Election Type'
            />

            <input
              type='text'
              className='block border border-grey-light w-full p-3 rounded mb-2'
              name='Date'
              placeholder='Date'
            />

            <input
              type='number'
              className='block border border-grey-light w-full p-3 rounded mb-2'
              name='Time'
              placeholder='Time'
            />

            <input
              type='password'
              className='block border border-grey-light w-full p-3 rounded mb-2'
              name='resultdate'
              placeholder='Result date'
            />

            <button
              type='submit'
              className='mx-28 text-center px-4 py-2 rounded bg-purple-500 text-white hover:bg-purple-600 focus:outline-none my-1'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Election;
