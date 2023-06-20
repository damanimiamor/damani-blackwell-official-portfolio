const app = Vue.createApp ({
    data() { 
        return{
            title: 'Completed Projects',
            source: [
                {
                    image: "/Images/projects/CatPhotoApp.png",
                    description:"A small project from freeCodeCamp focusing on HTML tags. <a class='link' href='https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-1'> Try it out! </a>"
                },
                { 
                    image: "/Images/projects/CafeMenu.png",
                    description:"A small project from freeCodeCamp that focuses on learning CSS.<a class='link'  href='https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-basic-css-by-building-a-cafe-menu/step-1'> Try it out! </a>"
                },
                { 
                    image: "/Images/projects/CSSMarkers.png",
                    description:"A small project from freeCodeCamp that focuses on learning css colors. <a class='link' href='https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-basic-css-by-building-a-cafe-menu'> Try it out!</a>" 
                }, 
                {
                    image: "/Images/projects/NutritionLabel.png",
                    description: " A small project from freeCodeCamp that focuses on learning typography. <a class='link' href='https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-typography-by-building-a-nutrition-label/step-1'>Try it out!</a>"
                }, 
                {   
                    image:"/Images/projects/Registration-form.png",
                    description:" A small project from freeCodeCamp that focuses on learning HTML forms. <a class='link' href='https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-forms-by-building-a-registration-form/step-1'>Try it Out!</a>"
                },
                {
                    image:"/Images/projects/RothkoPainting.png",
                    description:" A small project from freeCodeCamp that focuses on learning the Box Model.  <a class='link' href='https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-the-css-box-model-by-building-a-rothko-painting/step-1'>Try it out!</a>"
                }, 
                {
                    image:"/Images/projects/Contact-Form.png",
                    description: "I completed this project in 2023 at Boston University. It focuses on validation,  manipulating the DOM and intermediate javascript principles." 
                },
                {
                    image:"/Images/projects/Calculator.png",
                    description: "I worked on this project in 2023 at Boston University. It focuses on beginner javascript fundamentals and alerts." 
                },
                {
                    image:"/Images/projects/Fetch.png",
                    description: "I worked on this project in 2023 at Boston University. It focuses on working with JSON and the Fetch API"
                }
            ],
            index:0
        };
    },

    methods:{
        goBack(){
            this.index = (this.index -1 + this.source.length) % this.source.length;
        },
        next(){
            this.index = (this.index+1) % this.source.length ;
        }
    }
});

app.mount('#app')
