import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <>
    <footer>
        <div className='copyright'>
        <h6>&copy; 2020-2023 All rights reserved® | Terms & Conditions</h6>
        <h6>Conditions & Privacy Policy | Cureyoga offical</h6>
        </div>
        <div >
<FacebookIcon className='footericon'/>
<YouTubeIcon className='footericon'/>
<InstagramIcon className='footericon'/>
<GitHubIcon className='footericon'/>
<TwitterIcon className='footericon'/>
</div>

    </footer>
    </>
  )
}

export default Footer