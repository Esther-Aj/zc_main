import React, { useState } from "react";

import styles from "../admin-tab/AdminTab.module.css";

// components
import OverviewTab from "../overview-tab/OverviewTab";
import SettingsTab from "../setting-tab-billing/SettingsTab";
import PaymentTab from "../payment-tab/PaymentTab";
import MembersTab from "../members-tab/MembersTab";
import HistoryTab from "../history-tab/HistoryTab";
import TokensTab from "../tokens-tab/TokensTab";
import ContactTab from "../contact-tab/ContactTab";

// icons
import { FiMenu } from "react-icons/fi";
import { CardProvider } from "../../../../marketplace/src/context/CardContext";

const AdminTab = () => {
  const [openTab, setOpenTab] = useState(false);
  const [active, setActive] = useState(1);

  return (
    <CardProvider>
      <div className={styles.tabWrapper}>
        <div
          onClick={() => setOpenTab(!openTab)}
          className={styles.mobileToggle}
        >
          <FiMenu className={styles.menuIcon} />
        </div>
        <div className={openTab ? styles.tabHeaderActive : styles.tabHeader}>
          <div
            onClick={() => {
              setActive(1);
              setOpenTab(!openTab);
            }}
            className={
              active === 1 ? styles.tabHeaderItemActive : styles.tabHeaderItem
            }
          >
            Overview
          </div>
          <div
            onClick={() => {
              setActive(2);
              setOpenTab(!openTab);
            }}
            className={
              active === 2 ? styles.tabHeaderItemActive : styles.tabHeaderItem
            }
          >
            History
          </div>
          <div
            onClick={() => {
              setActive(3);
              setOpenTab(!openTab);
            }}
            className={
              active === 3 ? styles.tabHeaderItemActive : styles.tabHeaderItem
            }
          >
            Settings
          </div>
          <div
            onClick={() => {
              setActive(4);
              setOpenTab(!openTab);
            }}
            className={
              active === 4 ? styles.tabHeaderItemActive : styles.tabHeaderItem
            }
          >
            Contact
          </div>
          <div
            onClick={() => {
              setActive(5);
              setOpenTab(!openTab);
            }}
            className={
              active === 5 ? styles.tabHeaderItemActive : styles.tabHeaderItem
            }
          >
            Member changes
          </div>
          <div
            onClick={() => {
              setActive(6);
              setOpenTab(!openTab);
            }}
            className={
              active === 6 ? styles.tabHeaderItemActive : styles.tabHeaderItem
            }
          >
            Tokens
          </div>
          <div
            onClick={() => {
              setActive(7);
              setOpenTab(!openTab);
            }}
            className={
              active === 7 ? styles.tabHeaderItemActive : styles.tabHeaderItem
            }
          >
            Payment method
          </div>
        </div>
        <div className={styles.tabContent}>
          {active === 1 && (
            <OverviewTab
              setActive={setActive}
              setOpenTab={setOpenTab}
              openTab={openTab}
            />
          )}
          {active === 2 && <HistoryTab />}
          {active === 3 && <SettingsTab />}
          {active === 4 && <ContactTab />}
          {active === 5 && <MembersTab />}
          {active === 6 && <TokensTab />}
          {active === 7 && <PaymentTab />}
        </div>
      </div>
    </CardProvider>
  );
};

export default AdminTab;
