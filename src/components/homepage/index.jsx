import React from "react";
import styles from "./style.module.scss";
import Accordian from "../common/Accordion";
import AllValuts from "./AllVaults";
import AllItems from "./AllItems";
import Folders from "./Folders";

function HomeComponent() {
  let AllVaultData = [
    {
      header: "All Vaults",
      component: <AllValuts />,
    },
    {
      header: "All Items",
      component: <AllItems />,
    },
    {
      header: "Folders",
      component: <Folders />,
    },
  ];

  return (
    <section>
      <h2>VAULT</h2>
      <div className={`${styles["filter-container"]}`}>
        <div>
          <h4>Filter</h4>
          <div>
            <div>
              {AllVaultData.map((item) => (
                <div>
                  <Accordian header={item.header}>{item.component}</Accordian>
                </div>
              ))}
            </div>
            <div>Bin</div>
          </div>
        </div>

        <div>middle</div>
      </div>
    </section>
  );
}

export default HomeComponent;
