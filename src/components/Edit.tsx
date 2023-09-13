import { MouseEvent, useState } from "react"

const Edit = () => {
  const [heroName, setHeroName] = useState("")
  const [heroResson, setHeroResson] = useState("")
  const [url, SetURL] = useState("")

  const handleShare = (e : MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const queryString = "?heroName=" + heroName + "&heroResson=" + heroResson;
    const url = window.location.origin + window.location.pathname + "view" + queryString;
    SetURL(encodeURI(url));
  }
  
  return (
    <div className='flex flex-col my-auto items-center mx-3 mt-[10%]'>
      <form className='w-full h-full my-auto items-center flex flex-col text-left text-lg'>
        <div className='mt-10'>
          <label htmlFor="text">
            <div>캐릭터 이름 :</div>
            <input type="text" className='border shadow' onChange={e => setHeroName(e.target.value)} value={heroName} />
          </label>
        </div>
        <div className='mt-10'>
          <label htmlFor="text"><div>캐릭터를 좋아하는 이유 : </div>
            <input type="text" className='border shadow' onChange={e => setHeroResson(e.target.value)} value={heroResson}/>
          </label>
        </div>
        <div className='mt-10'>
          <button onClick={handleShare}>공유하기</button>
        </div>
        {
          url!== "" &&
          <div className='mt-10'>
            <label htmlFor="textarea">
              <div>공유 URL</div>
              <textarea className="resize-none w-96 h-52 border p-5" value={url} readOnly></textarea>
            </label>
          </div>
        }
      </form>
    </div>
  )
}

export default Edit