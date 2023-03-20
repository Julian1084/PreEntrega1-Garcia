import React, { Component } from "react";
import "./App.css";

// COMPONENTS
import Header from "./components/Greeting/Greeting";
import NavBar from "./components/NavBar/NavBar";
import CardUser from "./components/ItemListContainer/ItemListContainer";


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header
          title="Bienvenidos a Picadas Mundialistas"
          subTitle="Ofrecemos productos de primer nivel que fueron seleccionados cuidadosamente para garantizarle los mejores sabores, aromas y colores. Toda situación es especial para degustar una deliciosa picada gourmet."
        />
        <div className="UserSection">
          <CardUser
            name="Picada para 3"
            description="Picada para 3 personas contiene: Jamón Crudo Italiano, Fontina, Salamín Criollo, Muzzarelitas al Pimentón, Gouda, Leberwurst, Longaniza Tandilera, Galletas de Semola, Brindamour al Oregano
            INCLUYE Olivas Verdes, Crema Ciboulette, Pan"
            img="https://previews.dropbox.com/p/thumb/AB0nuxfOhHS9E3nOIe3hb4iGOSxAiAllUnd1AkX-UKFOTw11PB_D21a7KOF8_vO0exTBGFTbLoilwue_Ap7MAxph4TJqNVc5L_q-Bbb3sO-WFXsB09GSgHcTchgW_vgJeSLIlv0Iwbuv0Gqm8BPbQoYpHVX9XeDNF_my_IRyIEpkmJmlQ0tHgXJsIsAYOHMETdoWRmz5J6kAcpxmEsYbizyjN_8hZAw85YHRAOrU9tNhluAKzGEzaTjq6S0Fggq11PR2_KY6EGuCd3zjGhSdabbExIWfnvbPx_Js6fN7p-miqXocvsOwDoz7v8ZRjZqmcQ5O1qGfdbWfY_tIAGLhGTSbP4ki_LrIQ-RMI6ujmS207k-lKJtJFpQUR0oi_N6y_4c/p.png"
            price="$ 4000"
          />
          <CardUser
            name="Picada para 6"
            description="Picada para 6 personas contiene: Queso Camembert, Queso Azul, Queso Fontina, Queso Holanda, Queso Reggianito, Jamón Crudo Italiano, Salamín Criollo, Muzzarelitas al Pimentón, Leberwurst, Longaniza Tandilera, Galletas de Semola, Brindamour al Oregano
            INCLUYE Olivas Verdes, Crema Ciboulette, Pan"
            img="https://previews.dropbox.com/p/thumb/AB3Oei4PkGiP8mSUp1ydPV4SdadCPRmUY8-tvzaWfh3s5n4aDZSJ4E3klcCUohEgbEtn2dAEvRNdQbRIWqmFJITv5JjmkDpUF5u9cpb3hGMZokMtOPdPC0Jj1jdjMm2RJU5PU_feHlkmZhbLWhD-F_9_-4AlwzwjTMYXfKy2Zz5hTiaSRkh761TcgpVWFtzZL43sZw7zkI-sfjacFsX-DwSRRSL6iTB47PWScn0nVa9iN2msOkjjNpnDlBD873l5haqsfoss7Uupb39Ykd8uPNi4qatNR_ayht-hvShvsTrCGUs2XhqNMmpT6OEYNL3H5LHlmCrvzjVNT6Q7JOU-YAKd8nugjZ5F0Q02yGSVJ0ZfrY-Z1r_PZLedjdbPVMb9y6w/p.png"
            price="$ 7000"          
          />
          <CardUser
            name="Picada para 10"
            description="Picada para 10 personas contiene: Queso Camembert, Queso Azul, Queso Fontina, Queso Holanda, Queso Reggianito, Jamón Crudo Italiano, Salamín Criollo, Muzzarelitas al Pimentón, Leberwurst, Longaniza Tandilera, Galletas de Semola, Brindamour al Oregano
            INCLUYE Olivas Verdes, Crema Ciboulette, Pan"
            img="https://previews.dropbox.com/p/thumb/AB13qt6r1pQvkvGXahuZTBKVbqY10bA8kdYJLLdlLBW8IIq9kcNsCKY1ia7eMofWOkI88FhhMMhJi9LSoWben9jyuTcSxkaqAXVDwjLlORIuWPFirpzxDEWAe4bnZJm2e1rM33dFoJnVHR7vO0bUohi7aWDIhiyJ1DYeD327p2I0pHq1Y9hw2iJgjb7xIUi76LPHinYakIvJKvc9Q9pr3GDZh8_QI7pwjEGd4Wt9JjGpOs6bE2XEb7fNHG_oSDLrFO38Fj_0gAv1bGH3-2-kTnZ3MFwA0YKnl2e7U3Kmv3lxJJoDFqleFGjs3Ll2EbaFwXYHcufYYSYKpUumaRZfmDZZgr-4H92f5bOhbxEe3i4_DdnhOObue-wk6LLKGaq-ofg/p.png"
            price="$ 9000"
          />
        </div>
      </div>
    );
  }
}

export default App;
