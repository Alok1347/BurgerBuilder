import React from 'react';
import Aux from '../../hoc/Aux';
import content from './Layout.module.css'

const layout=(props)=>(
   <Aux>
   <div>
        ToolBar, SideDrawer,Backdrop
    </div>
<main className={content.container}>
    {props.children}
</main>
</Aux>
);
export default layout;