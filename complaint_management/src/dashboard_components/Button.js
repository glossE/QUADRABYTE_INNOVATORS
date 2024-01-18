import React from 'react'
import './Button.css'
// import ImgAsset from '../public/Button_Icon'
export default function Button () {
	return (
		<div className='Button_Button'>
			<div className='_Buttonbase'>
				<span className='Text'>Track Progress</span>
				{/* <div className='chevrondown'>
					<img className='Icon' src = {ImgAsset.Button_Icon} />
				</div> */}
			</div>
		</div>
	)
}