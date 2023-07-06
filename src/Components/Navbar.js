import React from 'react'
import jira from "../images/jira3124.jpg"

function Navbar() {
    return (
        <div>

            <nav class="bg-white ">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" class="flex items-center">
                        <img src={jira} class="h-8 mr-3" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap">JiraWorkManagement</span>
                    </a>
                    <div class="hidden w-full md:block md:w-auto" id="navbar-multi-level">
                        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-white-800 md:dark:bg-white-900 dark:border-white-700">
                            <input
                                type="search"
                                className="input"
                                id="default-search" class="block py-2 pl-3 pr-4 text-sm text-white-900 rounded-lg " placeholder="Search..." required
                            />
                            <li>
                                <a href="#" class="block py-2 pl-3 pr-4 text-black-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-black  dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">Projects</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pl-3 pr-4 text-black-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-black  dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">Filters</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pl-3 pr-4 text-black-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-black  dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">Dashboard</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pl-3 pr-4 text-black-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-black  dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">App</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar