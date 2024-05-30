import { createContext} from "react"
    const ThemeContext= createContext( {
        theme:{
            color1:"bg-yellow-200",
            color2:"bg-orange-300"
        }
    }
    )
export default ThemeContext;