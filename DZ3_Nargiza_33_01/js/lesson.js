//tab slider
/*const tabContents=document.querySelectorAll('.tab_content_block')
const tabItems=document.querySelectorAll('.tab_content_item')
const tabsParent=document.querySelector('.tab_content_items')
const hideTabContent=()=>{
 tabContents.forEach((tabContent)=>{
      tabContent.style.display='none'
    })
    tabItems.forEach((tabItem)=>{
        tabItem.classList.remove('tab_content_item_active')
    })
}

const showTabContent =(index=0)=>{
    tabContents[index].style.display='block'
    tabItems[index].classList.add('tab_content_item_active')
}



hideTabContent()
showTabContent(0)


tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabItems.forEach((tabItem, tabIndex) => {
            if (event.target === tabItem) {
                hideTabContent();
                showTabContent(tabIndex);
                let i = 0;
                setInterval(() => {
                    i++;
                    if (i > tabItems.length - 1) {
                        i = 0;
                    }
                    hideSlide();
                    showSlide(i);
                }, 5000);
            }
        });
    }
};*/
// 1вариант

const tabContents = document.querySelectorAll('.tab_content_block');
const tabItems = document.querySelectorAll('.tab_content_item');
const tabsParent = document.querySelector('.tab_content_items');

let autoSwitchTabsInterval; // Declare a variable for the interval

const hideTabContent = () => {
    tabContents.forEach((tabContent) => {
        tabContent.style.display = 'none';
    });
    tabItems.forEach((tabItem) => {
        tabItem.classList.remove('tab_content_item_active');
    });
};

const showTabContent = (index = 0) => {
    tabContents[index].style.display = 'block';
    tabItems[index].classList.add('tab_content_item_active');
};

const autoSwitchTabs = () => {
    let currentIndex = 0;

    return () => {
        hideTabContent();
        showTabContent(currentIndex);

        currentIndex = (currentIndex + 1) % tabItems.length;
    };
};

const startAutoSwitchTabs = () => {
    clearInterval(autoSwitchTabsInterval);

    const switchTabs = autoSwitchTabs();
    autoSwitchTabsInterval = setInterval(switchTabs, 3000);
};

hideTabContent();
showTabContent(0);
startAutoSwitchTabs(); // Start automatic tab switching

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabItems.forEach((tabItem, tabIndex) => {
            if (event.target === tabItem) {
                hideTabContent();
                showTabContent(tabIndex);
                startAutoSwitchTabs(); // Restart automatic tab switching
            }
        });
    }
};