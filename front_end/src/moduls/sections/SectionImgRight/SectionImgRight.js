import "./SectionImgRight.css"
import logo from "../../../media/logo_storno.png"
const SectionImgRight = () =>{

    return <header>
    <div className='text1'>
        <h1>Co je kapela Storno?</h1>
         <p>Jsme mladá metalová kapela z plzeňského kraje. V kapele hraje otec, jeho 2 synové a jejich kamarád.  Kapela začínala jako cover band, ale v tuhle chvíli pracuje na vlastní tvorbě.</p>
    </div>
    <img className="image_logo" src={logo} alt="" />
    </header>
}

export default SectionImgRight