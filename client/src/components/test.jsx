// <div className="mr-[18px] tablet:mr-10 desktop:mr-24">
//   <Menu as="div" className="relative inline-block text-left">
//     <div>
//       <Menu.Button
//         onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
//         className="inline-flex w-full justify-center items-center text-body-1 text-0C0E16 dark:text-FFFF cursor-pointer"
//       >
//         <span className="tablet:hidden">Filter</span>
//         <span className="hidden tablet:block">Filter by status</span>
//         {isFilterMenuOpen ? (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5 ml-2"
//             viewBox="0 0 20 20"
//             fill="#7C5DFA"
//           >
//             <path
//               fillRule="evenodd"
//               d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
//               clipRule="evenodd"
//             />
//           </svg>
//         ) : (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5 ml-2"
//             viewBox="0 0 20 20"
//             fill="#7C5DFA"
//           >
//             <path
//               fillRule="evenodd"
//               d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//               clipRule="evenodd"
//             />
//           </svg>
//         )}
//       </Menu.Button>
//     </div>
//     <Transition
//       as={Fragment}
//       enter="transition ease-out duration-100"
//       enterFrom="transform opacity-0 scale-95"
//       enterTo="transform opacity-100 scale-100"
//       leave="transition ease-in duration-75"
//       leaveFrom="transform opacity-100 scale-100"
//       leaveTo="transform opacity-0 scale-95"
//     >
//       <Menu.Items className="absolute z-20 -left-10 mt-2 w-48 h-32 origin-top-right divide-y divide-gray-100 rounded-md bg-FFFF shadow-lg ring-opacity-5 focus:outline-none">
//         <div className="px-1 py-1 ">
//           <form action="">
//             <input type="checkbox" name="Draft" id="" />
//             <input type="checkbox" name="Pending" id="" />
//             <input type="checkbox" name="Paid" id="" />
//           </form>
//           {/* <Menu.Item>
//             {({ active }) => (
//               <input
//                 className={`${
//                   active ? 'bg-violet-500 text-white' : 'text-gray-900'
//                 } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
//               >
//                 {active ? (
//                   <h2 className="mr-2 h-5 w-5" aria-hidden="true">
//                     active
//                   </h2>
//                 ) : (
//                   <h3 className="mr-2 h-5 w-5" aria-hidden="true">
//                     inactive
//                   </h3>
//                 )}
//                 Edit
//               </input>
//             )}
//           </Menu.Item> */}
//         </div>
//       </Menu.Items>
//     </Transition>
//   </Menu>
// </div>
<div className="pl-4 flex items-center">
  <div className="bg-gray-100 dark:bg-gray-800 border rounded-sm border-gray-200 dark:border-gray-700 w-3 h-3 flex flex-shrink-0 justify-center items-center relative">
    <input
      type="checkbox"
      className="checkbox opacity-0 absolute cursor-pointer w-full h-full"
    />
    <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
      <svg
        className="icon icon-tabler icon-tabler-check"
        xmlns="http://www.w3.org/2000/svg"
        width={12}
        height={12}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" />
        <path d="M5 12l5 5l10 -10" />
      </svg>
    </div>
  </div>
  <p className="text-sm leading-normal ml-2 text-gray-800">Facebook</p>
</div>;
