import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography, Box } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';
import ModalPostagem from '../modalPostagem/ModalPostagem';
import Sobre from '../../sobre/Sobre';
import ListaTema from '../../temas/listatema/ListaTema';
import ModalTema from '../../temas/modalTema/ModalTema';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static" className='back-home '>
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
            <Tab className="menu-tab" label="Todas as postagens" value="1"/>
            <Tab className="menu-tab" label="Todos os temas" value="2" />
            <Tab className="menu-tab" label="Sobre-Me" value="3" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box  display="flex" flexWrap="wrap" justifyContent="center" style={{margin:'5px'}}>
            <ModalPostagem/>
          </Box>
          <Box  display="flex" flexWrap="wrap" >
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Box  display="flex" flexWrap="wrap" justifyContent="center" style={{margin:'5px'}}>
            <ModalTema/>
          </Box>
          <ListaTema/>
        </TabPanel>
        <TabPanel value="3">
          <Sobre/>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;