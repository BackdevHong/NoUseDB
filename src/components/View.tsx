import { useState } from "react"
import { useLocation, useSearchParams } from "react-router-dom";

const View = () => {
  const [searchParams, setSearchParams] = useSearchParams("")

  return (
    <div className='flex flex-col my-auto items-center mx-3 mt-[10%]'>
      <form className='w-full h-full my-auto items-center flex flex-col text-left text-lg'>
        <div className='mt-10'>
          <label htmlFor="text">
            <div>캐릭터 이름 : {searchParams.get("heroName")}</div>
          </label>
        </div>
        <div className='mt-10'>
          <label htmlFor="text"><div>캐릭터를 좋아하는 이유 : {searchParams.get("heroResson")}</div>
          </label>
        </div>
      </form>
    </div>
  )
}

export default View