
import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Box, Grid } from '@material-ui/core';
import './Footer.css';
import { useDispatch, useSelector } from 'react-redux';
import { UserState } from '../../../store/tokens/keysRedux';

function Footer(){



    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
      ) 

      var footerComponent;
      if(token != ''){
          footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
          <Grid alignItems="center" item xs={12}>
              <Box style={{ backgroundColor: "#000803", height: "120px" }}>
                  <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                      <Typography className="font-title-footer-arthur" variant="h5" align="center" gutterBottom >Siga-me nas redes sociais. </Typography>
                  </Box>
                  <Box  display="flex" alignItems="center" justifyContent="center">
                      <a>
                          <FacebookIcon className="font-linkNavbar-footer" style={{ fontSize: 40}} />
                      </a>
                      <a >
                          <InstagramIcon  className="font-linkNavbar-footer" style={{ fontSize: 40}} />
                      </a>
                      <a href="https://www.linkedin.com/in/arthuritajahy/" target="_blank">
                          <LinkedInIcon className="font-linkNavbar-footer" style={{ fontSize: 40}} />
                      </a>
                      <a href="https://github.com/ArthurItajahy" target="_blank">
                     
                          <GitHubIcon className="font-linkNavbar-footer" style={{ fontSize: 30}}/>
                  
                      </a>
                  </Box>
              </Box>
              <Box style={{ backgroundColor: "#000803", height: "90px" }}>
                  <Box paddingTop={1}>
                      <Typography className="font-title-footer" variant="subtitle2" align="center" gutterBottom  >© 2022 Copyright:</Typography>
                  </Box>
                  <Box>
                      <a className="text-decorator-none" target="_blank" href="https://github.com/ArthurItajahy">
                          <Typography className="font-title-footer-arthur" variant="subtitle2" gutterBottom  align="center">By Arthur Itajahy</Typography>
                      </a>
                  </Box>
              </Box>
          </Grid>
      </Grid>

      }
    return(
        <>
           {footerComponent}
        </>
    )

}

export default Footer;