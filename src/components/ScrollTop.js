import { useEffect } from "react"; 
import { useLocation } from "react-router-dom";

//возвращает страницу к самому верху если на ней был скролл а потом совершался переход на другие страницы
const ScrollTop = () => {
    const {pathname} = useLocation();
    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0
        })
    }, [pathname])
    console.log(pathname);
    return null;
}

export default ScrollTop;