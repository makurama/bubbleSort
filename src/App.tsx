import React, {useState} from 'react';
import {BubbleViewModel} from "./Sort/BubbleSort/BubbleViewModel";
import {BubbleView} from "./Sort/BubbleSort/BubbleView";
import {ArraySize} from "./components/ArraySize";
import {Menu} from "./components/Menu";
import {SpeedEnumeration} from "./components/SpeedEnumeration";
import {HelpMenu} from './components/helpMenu';
import {ModalWrapper} from './components/modalWrapper';

const VM_BUBBLE = new BubbleViewModel();
function App() {

   const [settingOpen, setSettingOpen] = useState(false); //хук для модалки
   const [helpOpen, setHelpOpen] = useState(false); //хук для модалки

   const InfoText = () => <>
      <h1>Инструкция</h1>
      <ul>
         <li>Play - для начала сортировки</li>
         <li>Reset - для получения нового массива данных</li>
         <li>Setting - для настройки приложения</li>
      </ul>
      <h2>Настройки включают в себя</h2>
      <ul>
         <li>Скорость перебора данных массива</li>
         <li>Размер массива</li>
      </ul>
   </>

    //можно было передать контекстом, но т.к. уровень дерева не большой, то просто передал пропсом
   return (
   <div className="container">
      <div className="flex_container screen_sort">
         <BubbleView model={VM_BUBBLE}/>
      </div>

      <div className="flex_container">
         <Menu model={VM_BUBBLE}/>
      </div>

      <HelpMenu helpHook={setHelpOpen} settingHook={setSettingOpen}/>

      {settingOpen &&
         <ModalWrapper modalOpen={setSettingOpen}>
            <ArraySize model={VM_BUBBLE}/>
            <SpeedEnumeration model={VM_BUBBLE}/>
         </ModalWrapper>}

      {helpOpen &&
      <ModalWrapper modalOpen={setHelpOpen}>
         <InfoText/>
      </ModalWrapper>}
   </div>
   );
   }

export default App;
