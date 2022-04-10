import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography, Box } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import './TabPostagemPerfil.css';
import ModalPostagem from '../modalPostagem/ModalPostagem';
import ListaPostagemPerfil from '../listapostagemPerfil/ListaPostagemPerfil';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static" className='back-home-Perfil '>
          <Tabs centered  onChange={handleChange}>
            <Tab className="menu-tab-perfil" label="Todas as postagens" value="1"/>
          </Tabs>
        </AppBar>
        <TabPanel value="1"  style={{margin:'1px'}}>
          <Box  display="flex" flexWrap="wrap" justifyContent="center" style={{margin:'8px'}}>
            <ModalPostagem/>
          </Box>
          <Box  display="flex" flexWrap="wrap" style={{margin:'8px'}} >
            <ListaPostagemPerfil />
          </Box>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;