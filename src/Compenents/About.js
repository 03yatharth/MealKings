import { useState } from "react"

const Section =({topic,description,isActive,onShow,onHide})=>{
    const [btn,setBtn]=useState('show')
    return(
        <>
            <div className="border border-black m-4 p-4">
                <p className="m-auto text-xl">this page is dedicated {topic}</p>
                    {isActive ? (
                        <>
                        <button className="border border-black m-2 px-2" onClick={onHide}>
                            hide
                        </button>
                        <p>{description}</p>
                        </>
                    ) : (
                        <button className="border border-black m-2 px-2" onClick={onShow}>
                            show
                        </button>
                    )}
            </div>
        </>
    )
}
const About =()=>{
    const [isActive,setIsActive]=useState(null)
    
    return(
        <>
            <Section isActive={isActive===0} onShow={()=>setIsActive(0)} onHide={()=>setIsActive(null)}  name={"user"} topic={"about user"} description={"Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real."} />
            <Section isActive={isActive===1} onShow={()=>setIsActive(1)} onHide={()=>setIsActive(null)}  name={"production"} topic={"about Production"} description={"Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.”"} />
            <Section isActive={isActive===2} onShow={()=>setIsActive(2)} onHide={()=>setIsActive(null)}  name={"team"} topic={"about Team"} description={"Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.”"}/>  
        </>
    )
}
export default About;

