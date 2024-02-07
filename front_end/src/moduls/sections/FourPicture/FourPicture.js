import "./FourPicture.css"

import test_picture_1 from "../../../media/test_picture_1.png"
import microphone from "../../../media/microphone.png"
import bass from "../../../media/bass.png"
import drums from "../../../media/drums.png"
import guitar from "../../../media/guitar.png"

const FourPicture = () =>{

    return <div className='four_pictures'>

<div className="picture_vertical">
<h2>Zpěv</h2>
<p>Vojtěch Hrečin</p>
<img src={microphone} alt="" />
</div>

<div className="picture_vertical">
<h2>Basa</h2>
<p>Daniel Hrečin</p>
<img src={bass} alt="" />
</div>

<div className="picture_vertical">
<h2>Bicí</h2>
<p>Karel Kučera</p>
<img src={drums} alt="" />
</div>

<div className="picture_vertical">
<h2>Kytara</h2>
<p>Zdeněk Hrečin</p>
<img src={guitar} alt="" />
</div>
</div>
}

export default FourPicture