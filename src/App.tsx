import Sidebar from './Components/Molecules/Sidebar';
export default function App() {
  return (
    <div className="grid grid-cols-6 text-white">
      <div className="h-screen px-1 py-3 col-span-1">
        <div className='flex flex-col justify-between h-full items-start'>
          <Sidebar/>
        </div>
      </div>
      {/* <div className="bg-green-500 col-span-4">Kotak 2</div>
      <div className="bg-red-500">Kotak 3</div> */}
    </div>
  )
}
