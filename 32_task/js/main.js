// Завдання 1
// Реалізуйте клас, що описує коло. Клас має складатися з на-
// ступних компонентів:
// ■ поле з радіусом кола;
// ■ get-властивість, що повертає радіус кола;
// ■ set-властивість, що встановлює радіус кола;
// ■ get-властивість, що повертає діаметр кола;
// ■ метод, що обчислює площу кола;
// ■ метод, що обчислює довжину кола.
// Продемонструйте роботу властивостей і методів.

{
    class Circle {
        constructor(radius) {
            this._radius = radius;
        }

        get radius() {
            return this._radius;
        }

        set radius(newRadius) {
            if (newRadius >= 0) {
                this._radius = newRadius;
            } else {
                console.error("Радіус не може бути від'ємним.");
            }
        }

        get diameter() {
            return this._radius * 2;
        }

        calculateArea() {
            return Math.PI * this._radius ** 2;
        }

        calculateCircumference() {
            return 2 * Math.PI * this._radius;
        }
    }

   
    let circle = new Circle(5);

    console.log(`Радіус кола: ${circle.radius}`);
    console.log(`Діаметр кола: ${circle.diameter}`);
    console.log(`Площа кола: ${circle.calculateArea()}`);
    console.log(`Довжина кола: ${circle.calculateCircumference()}`);

   
    circle.radius = 7;
    console.log(`Новий радіус кола: ${circle.radius}`);
}



// Завдання 2
// Реалізуйте клас, що описує HTML - елемент.
// Клас HtmlElement має містити:
// ■ назву тегу;
// ■ тег, що самозакривається;
// ■ текстовий вміст;
// ■ масив атрибутів;
// ■ масив стилів;
// ■ масив вкладених таких самих тегів;
// ■ метод встановлення атрибуту;
// ■ метод встановлення стилю;
// ■ метод додавання вкладеного елемента в кінець поточного
// елемента;
// ■ метод додавання вкладеного елемента на початок поточ -
//     ного елемента;
// ■ метод getHtml(), який повертає HTML - код у вигляді ряд -
//     ка, включаючи HTML - код вкладених елементів.
// За допомогою написаного класу реалізувати наступний блок
// і додати його на сторінку за допомогою document.write().
// Зверніть увагу.Щоб отримати весь цей HTML - код у вигляді
// рядка, достатньо буде викликати метод getHtml тільки у тег
// з ідентифікатором wrapper.

{
    class HtmlElement {
        constructor(tagName, selfClosing = false) {
          this.tagName = tagName;
          this.selfClosing = selfClosing;
          this.textContent = "";
          this.attributes = [];
          this.styles = {};
          this.children = [];
        }
      
        setAttribute(name, value) {
          this.attributes.push({ name, value });
        }
      
        setStyle(name, value) {
          this.styles[name] = value;
        }
      
        addChild(element) {
          this.children.push(element);
        }
      
        addChildAtBeginning(element) {
          this.children.unshift(element);
        }
      
        getHtml() {
          let attributesStr = this.attributes.map(attr => `${attr.name}="${attr.value}"`).join(" ");
          let stylesStr = Object.keys(this.styles).map(style => `${style}:${this.styles[style]}`).join(";");
      
          let html = `<${this.tagName} ${attributesStr}`;
          if (stylesStr) {
            html += ` style="${stylesStr}"`;
          }
      
          if (this.selfClosing) {
            html += " />";
          } else {
            html += ">";
            if (this.textContent) {
              html += this.textContent;
            }
      
            for (const child of this.children) {
              html += child.getHtml();
            }
      
            html += `</${this.tagName}>`;
          }
      
          return html;
        }
      }
      
      
      let wrapper = new HtmlElement("div", false);
      wrapper.setAttribute("id", "wrapper");
      wrapper.setStyle("display", "flex");
      
      let div1 = new HtmlElement("div", false);
      div1.setStyle("width", "300px");
      div1.setStyle("margin", "10px");
      
      let h3 = new HtmlElement("h3", false);
      h3.textContent = "What is Lorem Ipsum?";
      let img = new HtmlElement("img", true);
      img.setAttribute("src", "lipsum.jpg");
      img.setAttribute("alt", "");
      img.setStyle("width", "100%");
      
      let p = new HtmlElement("p", false);
      p.setStyle("text-align", "justify");
      p.textContent =
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur incidunt accusantium molestias. Officiis deserunt excepturi nisi consequuntur nostrum praesentium. Optio, voluptatem. Corporis, dolores molestias! Saepe repellat dolorum eligendi natus sequi!";
      
      let a = new HtmlElement("a", false);
      a.setAttribute("href", "https://www.lipsum.com/");
      a.setAttribute("target", "_blank");
      a.textContent = "More...";
      
      p.addChild(a);
      div1.addChild(h3);
      div1.addChild(img);
      div1.addChild(p);
      
      wrapper.addChild(div1);
      

      document.write(wrapper.getHtml());
      
}


// Завдання 3
// Реалізувати клас, який описує CSS- клас.
// Клас CssClass має містити в собі:
// ■ назву CSS-класу;
// ■ масив стилів;
// ■ метод встановлення стилю;
// ■ метод видалення стилю;
// ■ метод getCss(), який повертає CSS-код у вигляді рядка.

{
    class CssClass {
        constructor(className) {
            this.className = className;
            this.styles = {};
        }

        setStyle(styleName, styleValue) {
            this.styles[styleName] = styleValue;
        }

        removeStyle(styleName) {
            if (this.styles.hasOwnProperty(styleName)) {
                delete this.styles[styleName];
            }
        }

        getCss() {
            let cssCode = `.${this.className} {`;
            for (let styleName in this.styles) {
                if (this.styles.hasOwnProperty(styleName)) {
                    let styleValue = this.styles[styleName];
                    cssCode += `${styleName}: ${styleValue};`;
                }
            }
            cssCode += `}`;
            return cssCode;
        }
    }

    
    let myClass = new CssClass("my-class");
    myClass.setStyle("color", "red");
    myClass.setStyle("font-size", "16px");

    console.log(myClass.getCss());
}


// Завдання 4
// Реалізуйте клас, що описує блок HTML-документ.
// Клас HtmlBlock має містити:
// ■ колекцію стилів, описаних за допомогою класу CssClass;
// ■ кореневий елемент, описаний за допомогою класу
// HtmlElement;
// ■ метод getCode(), який повертає рядок з HTML-кодом
// (спочатку теги style з описом усіх класів, а потім увесь
// HTML-вміст з кореневого тегу та його вкладених елемен-
// тів).

{
    //2

    // class CssClass {
    //     constructor(className) {
    //       this.className = className;
    //       this.styles = {};
    //     }
      
    //     setStyle(styleName, styleValue) {
    //       this.styles[styleName] = styleValue;
    //     }
      
    //     getCss() {
    //       let cssCode = `.${this.className} {`;
    //       for (const styleName in this.styles) {
    //         if (this.styles.hasOwnProperty(styleName)) {
    //           const styleValue = this.styles[styleName];
    //           cssCode += `${styleName}: ${styleValue};`;
    //         }
    //       }
    //       cssCode += `}`;
    //       return cssCode;
    //     }
    //   }
      
    //   class HtmlElement {
    //     constructor(tagName, isSelfClosing = false, textContent = "") {
    //       this.tagName = tagName;
    //       this.isSelfClosing = isSelfClosing;
    //       this.textContent = textContent;
    //       this.attributes = [];
    //       this.styles = [];
    //       this.children = [];
    //     }
      
    //     setAttribute(attributeName, attributeValue) {
    //       this.attributes.push({ name: attributeName, value: attributeValue });
    //     }
      
    //     setStyle(styleName, styleValue) {
    //       this.styles.push({ name: styleName, value: styleValue });
    //     }
      
    //     addChild(childElement) {
    //       this.children.push(childElement);
    //     }
      
    //     getHtml() {
    //       const attributesString = this.attributes
    //         .map((attribute) => `${attribute.name}="${attribute.value}"`)
    //         .join(" ");
    //       const stylesString = this.styles
    //         .map((style) => `${style.name}:${style.value};`)
    //         .join(" ");
      
    //       let element = `<${this.tagName}`;
    //       if (attributesString) {
    //         element += ` ${attributesString}`;
    //       }
    //       if (stylesString) {
    //         element += ` style="${stylesString}"`;
    //       }
    //       if (this.isSelfClosing) {
    //         element += `/>`;
    //       } else {
    //         element += `>${this.textContent}`;
    //         for (const child of this.children) {
    //           element += child.getHtml();
    //         }
    //         element += `</${this.tagName}>`;
    //       }
      
    //       return element;
    //     }
    //   }
      
    //   class HtmlBlock {
    //     constructor() {
    //       this.styles = [];
    //       this.rootElement = null;
    //     }
      
    //     addCssClass(cssClass) {
    //       this.styles.push(cssClass);
    //     }
      
    //     setRootElement(rootElement) {
    //       this.rootElement = rootElement;
    //     }
      
    //     getCode() {
    //       let cssCode = "";
    //       for (const cssClass of this.styles) {
    //         cssCode += cssClass.getCss() + "\n";
    //       }
      
    //       const htmlCode = this.rootElement.getHtml();
      
    //       return `<style>\n${cssCode}</style>\n${htmlCode}`;
    //     }
    //   }
      
    //   // Створення CSS-класів
    //   const headingClass = new CssClass("heading");
    //   headingClass.setStyle("font-size", "24px");
    //   headingClass.setStyle("color", "blue");
      
    //   const paragraphClass = new CssClass("paragraph");
    //   paragraphClass.setStyle("font-size", "16px");
    //   paragraphClass.setStyle("color", "green");
      
    //   // Створення HTML-елементів
    //   const rootElement = new HtmlElement("div", false);
    //   rootElement.setAttribute("id", "wrapper");
      
    //   const heading = new HtmlElement("h1", false, "Заголовок сторінки");
    //   heading.setAttribute("heading");
    //   rootElement.addChild(heading);
      
    //   const paragraph = new HtmlElement("p", false, "Це текстовий параграф.");
    //   paragraph.setAttribute("paragraph");
    //   rootElement.addChild(paragraph);
      
    //   // Створення блоку та додавання CSS-класів та кореневого елементу
    //   const block = new HtmlBlock();
    //   block.addCssClass(headingClass);
    //   block.addCssClass(paragraphClass);
    //   block.setRootElement(rootElement);
      
    //   // Генерація HTML-коду та вивід на сторінку
    //   const htmlCode = block.getCode();
    //   document.getElementById("output").innerHTML = htmlCode;
      
}