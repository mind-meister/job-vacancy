import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="p-4 bg-slate-300 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <span className="text-sm text-white-500 sm:text-center dark:text-gray-400">© 2022. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <Link href="#" className="text-gray-900 hover:text-gray-400 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium active">About</Link>
        </li>
        <li>
            <Link href="#" className="text-gray-900 hover:text-gray-400 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium active">Privacy Policy</Link>
        </li>
        <li>
            <Link href="#" className="text-gray-900 hover:text-gray-400 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium active">Licensing</Link>
        </li>
        <li>
            <Link href="#" className="text-gray-900 hover:text-gray-400 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium active">Contact</Link>
        </li>
    </ul>
</footer>
  )
}

export default Footer