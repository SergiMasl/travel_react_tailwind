import React from 'react'

export default function SearchForm() {
  return (
    <form className='w-full'>
        <div className='flex flex-col my-2'>
            <label>Destination</label>
            <select className='border rounded-md p-2'>
                <option>Grande Antigua</option>
                <option>Key West</option>
                <option>Maldives</option>
                <option>Cozumel</option>
            </select>
        </div>
        <div className='flex flex-col my-4'>
            <label>Check-In</label>
            <input className='border rounded-md p-2' type="date" />
        </div>
        <div className='flex flex-col my-2'>
            <label>Check-Out</label>
            <input className='border rounded-md p-2' type="date" />
        </div>
        <button className='w-full my-4'>Rates & Availabilities</button>
</form>
  )
}
