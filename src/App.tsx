import Sidebaritems from './Components/Atoms/Sidebaritem'

export default function App() {
  return (
    <div className="grid grid-cols-6 text-white">
      <div className="h-screen ps-[5%] py-3">
        <div className='flex flex-col justify-between h-full'>
          <div>
            {' '}
            <div className="w-fit">
              <img
                src="/Assets/img/Threads.png"
                alt="Threads"
                className="w-11"
              />
            </div>
          </div>
          <div className='space-y-4'>
            <div>
              <Sidebaritems />
            </div>
            <div> search</div>
            <div> post</div>
            <div> like </div>
            <div> Profile </div>
          </div>
          <div className='space-y-2'>
            {' '}
            <div> Pin </div>
            <div> settings </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-green-500 col-span-4">Kotak 2</div>
      <div className="bg-red-500">Kotak 3</div> */}
    </div>
  )
}
