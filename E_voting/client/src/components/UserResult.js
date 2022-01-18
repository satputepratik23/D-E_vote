import React from "react";

function UserResult() {
  return (
    <div className='h-96 p-28  bg-gradient-to-b from-gray-400'>
      <div className='mx-28'>
        <div className='shadow overflow-hidden rounded border-b border-gray-200'>
          <table className='min-w-full bg-white'>
            <thead className='bg-gray-800 text-white'>
              <tr>
                <th className='w-1/2 text-center py-3 px-4 uppercase font-semibold text-sm'>
                  Name
                </th>

                <th class='text-center py-3 px-4 uppercase font-semibold text-sm'>
                  Vote
                </th>
              </tr>
            </thead>
            <tbody class='text-gray-700'>
              <tr>
                <td class='w-1/3 text-center py-3 px-4'>Candidate1</td>

                <td class='text-center py-3 px-4'>
                  <a
                    class='hover:text-blue-500'
                    href='mailto:jonsmith@mail.com'
                  >
                    45
                  </a>
                </td>
              </tr>
              <tr class='bg-gray-100'>
                <td class='w-1/3 text-center py-3 px-4'>Candidate2</td>

                <td class='text-center py-3 px-4'>
                  <a
                    class='hover:text-blue-500'
                    href='mailto:jonsmith@mail.com'
                  >
                    82
                  </a>
                </td>
              </tr>
              <tr>
                <td class='w-1/3 text-center py-3 px-4'>Candidate3</td>

                <td class='text-center py-3 px-4'>
                  <a
                    class='hover:text-blue-500'
                    href='mailto:jonsmith@mail.com'
                  >
                    95
                  </a>
                </td>
              </tr>
              <tr class='bg-gray-100'>
                <td class='w-1/3 text-center py-3 px-4'>Candidate4</td>

                <td class='text-center py-3 px-4'>
                  <a
                    class='hover:text-blue-500'
                    href='mailto:jonsmith@mail.com'
                  >
                    74
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserResult;
