const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 1.00,
      img: "./images/item-1.jpeg",
      desc: `Dive into the world of breakfast bliss with our buttermilk pancakes – a symphony of fluffiness and flavor that turns every morning into a celebration. These golden stacks, kissed by the sweetness of buttermilk and crowned with maple syrup, redefine the art of starting your day.`,
    },
    {
      id: 2,
      title: "burger and fries",
      category: "lunch",
      price: 1.00,
      img: "./images/item-2.jpeg",
      desc: `Indulge in savory satisfaction with our signature burger, crafted with premium beef and adorned with fresh, crisp toppings. Paired perfectly with a side of golden fries, it's a symphony of flavors that guarantees a delightful culinary experience.`,
    },
    {
      id: 3,
      title: "strawberry milkshake",
      category: "shakes",
      price: 1.00,
      img: "./images/item-3.jpeg",
      desc: `Satisfy your sweet cravings with our luscious strawberry milkshakes, blending creamy indulgence with a burst of delightful flavors. Each sip is a heavenly escape into a world of sweetness and joy.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 1.00,
      img: "./images/item-4.jpeg",
      desc: `Experience the heartwarming charm of a country breakfast, where farm-fresh eggs, crispy bacon, and golden buttermilk biscuits come together in a hearty morning feast. It's a comforting start that transports you to the rustic simplicity of a countryside morning.`,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 1.00,
      img: "./images/item-5.jpeg",
      desc: `Indulge in the perfect fusion of breakfast and burger bliss with our Egg Burger—a tantalizing combination of a juicy beef patty, melty cheese, and a perfectly fried egg, all embraced by a soft, toasted bun. It's the ultimate savory delight for those craving a morning twist on the classic burger experience.`,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 1.00,
      img: "./images/item-6.jpeg",
      desc: `Satisfy your sweet cravings with our decadent Oreo Milkshake, blending rich vanilla ice cream with the timeless allure of crushed Oreo cookies for an irresistibly creamy and indulgent treat.`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 1.00,
      img: "./images/item-7.jpeg",
      desc: `Delight in the savory harmony of crispy bacon, fluffy eggs, and melted cheese nestled within a warm, flaky biscuit – a hearty breakfast that's sure to kickstart your day with flavor-packed goodness.`,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 1.00,
      img: "./images/item-8.jpeg",
      desc: `
      Indulge in the classic satisfaction of a juicy cheeseburger paired with golden, crispy fries – a timeless duo that promises to gratify your taste buds with every delightful bite.`,
    },
    {
      id: 9,
      title: "foodie buddy",
      category: "all",
      price: 0.00,
      img: "./images/item-9.jpeg",
      desc: `Embark on a delightful culinary adventure with your Pursuit buddy at our restaurant, exploring a personalized tasting menu crafted by our expert chefs. Revel in the shared joy of discovering unique flavors, savoring each exquisite dish, and creating lasting memories together.`,
    },
    {
      id: 10,
      title: "steak au poivre",
      category: "dinner",
      price: 1.00,
      img: "./images/item-10.jpeg",
      desc: `Savor the exquisite flavors of our Steak au Poivre, where succulent cuts of perfectly seasoned steak meet a rich, peppery cream sauce, elevating your dining experience to a symphony of culinary delight.`,
    },
  ];
  // get parent element
  const sectionCenter = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");
  // display all items when page loads
  window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
  });
  
  function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
      // console.log(item);
  
      return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);
  
    sectionCenter.innerHTML = displayMenu;
  }
  function displayMenuButtons() {
    const categories = menu.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["all"]
    );
    const categoryBtns = categories
      .map(function (category) {
        return `<button type="button" class="filter-btn" data-id=${category}>
            ${category}
          </button>`;
      })
      .join("");
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);
  
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        // console.log(e.currentTarget.dataset);
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
          // console.log(menuItem.category);
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === "all") {
          diplayMenuItems(menu);
        } else {
          diplayMenuItems(menuCategory);
        }
      });
    });
  }