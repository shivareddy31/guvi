var top_div = document.createElement("div");
top_div.setAttribute("class", "top-div")
document.body.appendChild('top-div')
var img = document.createElement("img")
    //img.src = "C:\Users\vindu\Pictures\chris-hemsworth.jpg"
img.setAttribute("class", "main-image")
top_div.appendChild(img)

var line = document.createElement("div");
line.setAttribute("class", "line")
top_div.appendChild(line)

var container = document.createElement("div")
container.setAttribute("class", "container")
top_div.appendChild(container)

var icon_name = document.createElement("p")
icon_name.innerText = "CHARLIE"
icon_name.setAttribute("class", "name")
container.appendChild(icon_name)

var text_center = document.createElement("p")
text_center.setAttribute("class", "text-center")
text_center.innerText = "N. Damen Avenue, Chicago 99999 | 999-999-9999 | hello@kickresume.com | www.kickresume.com"

var hr = document.createElement("hr")
hr.setAttribute("class", "hr")

let container_1 = document.createElement("div")
container_1.setAttribute("class", "container-1")

let icon_containers = document.createElement("div")
icon_containers.setAttribute("class", "icon-containers")

let icons = document.createElement("div")
icons.setAttribute("class", "icons")

let user = document.createElement("img")
    //user.src = "./images/user.png"
icons.appendChild(user)
icon_containers.appendChild(icons)

let heading_1 = document.createElement("h1")
heading_1.innerText = "Profile"

let p_1 = document.createElement("p")
p_1.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus facere sint minima. Magni quaerat, distinctio possimus doloremque fugit veniam molestias illo numquam velit, accusantium quos, non consequatur a ut dignissimos?"

let icon_container_2 = document.createElement("div")
icon_container_2.setAttribute("class", "icon-containers")

let icon_2 = document.createElement("div")
icon_2.setAttribute("class", "icons")

let flask = document.createElement("img")
    //flask.src = "./images/flask.png"
icon_2.appendChild(flask)
icon_container_2.appendChild(icon_2)

let heading_2 = document.createElement("h1")
heading_2.innerText = "Skills"

let technical_skills = document.createElement("h3")
technical_skills.style.textAlign = "center"
technical_skills.innerText = "Technical Skills"

let skill_names = document.createElement("div")
skill_names.setAttribute("class", "skill-names")

let skill_1 = document.createElement("h4")
skill_1.innerText = "JavaScript"
let skill_2 = document.createElement("h4")
skill_2.innerText = "CSS"
let skill_3 = document.createElement("h4")
skill_3.innerText = "HTML"
let skill_4 = document.createElement("h4")
skill_4.innerText = "React"
let skill_5 = document.createElement("h4")
skill_5.innerText = "Python"
let skill_6 = document.createElement("h4")
skill_6.innerText = "Deployment"

let skill_range = document.createElement("div")
skill_range.setAttribute("class", "skill-range")

function rangeFun(name, value) {
    let input = document.createElement("input")
    input.setAttribute("type", "range")
    input.setAttribute("name", name)
    input.setAttribute("min", "1")
    input.setAttribute("max", "100")
    input.setAttribute("value", value)
    input.setAttribute("value", value)
    input.setAttribute("class", "sk")
    return input;
}

let range_1 = rangeFun("js", "75")
let range_2 = rangeFun("css", "65")
let range_3 = rangeFun("html", "80")
let range_4 = rangeFun("react", "50")
let range_5 = rangeFun("python", "90")
let range_6 = rangeFun("deploy", "55")

skill_names.append(skill_1, skill_2, skill_3, skill_4, skill_5, skill_6)
skill_range.append(range_1, range_2, range_3, range_4, range_5, range_6)

let additional_skills = document.createElement("h3")
additional_skills.style.textAlign = "center"
additional_skills.innerText = "Additional Skills"

let a_skill_names = document.createElement("div")
a_skill_names.setAttribute("class", "skill-names")

let a_skill_1 = document.createElement("h4")
a_skill_1.innerText = "Project Management"
let a_skill_2 = document.createElement("h4")
a_skill_2.innerText = "Leadership"
let a_skill_3 = document.createElement("h4")
a_skill_3.innerText = "Development"
let a_skill_4 = document.createElement("h4")
a_skill_4.innerText = "Management"

a_skill_names.append(a_skill_1, a_skill_2, a_skill_3, a_skill_4)

let a_skill_range = document.createElement("div")
a_skill_range.setAttribute("class", "skill-range")

let a_range_1 = rangeFun("js", "100")
let a_range_2 = rangeFun("css", "100")
let a_range_3 = rangeFun("html", "80")
let a_range_4 = rangeFun("react", "90")

a_skill_range.append(a_range_1, a_range_2, a_range_3, a_range_4)


let icon_container_3 = document.createElement("div")
icon_container_3.setAttribute("class", "icon-containers")
icon_container_3.style.marginTop = "60px"

let icon_3 = document.createElement("div")
icon_3.setAttribute("class", "icons")

let breif = document.createElement("img")
    //breif.src = "./images/briefcase.png"
icon_3.appendChild(breif)
icon_container_3.appendChild(icon_3)

let heading_3 = document.createElement("h1")
heading_3.innerHTML = "Work Experience<br><br>"
heading_3.style.marginTop = "60px"

let wep_1 = document.createElement("p")
wep_1.innerHTML = "<strong>Fullstack Developer</strong>"
wep_1.style.display = "inline-block"
wep_1.style.marginBottom = "0"

let wep_2 = document.createElement("p")
wep_2.innerText = "02/2014 - 05/2018"
wep_2.style.float = "right"

let wep_3 = document.createElement("p")
wep_3.innerText = "One Company"
wep_3.style.margin = "0"


let woex = document.createElement("ul")
let woex_list_1 = document.createElement("li")
woex_list_1.innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi earum quis labore ipsam consequatur corrupti vitae, nostrum perferendis itaque consequuntur adipisci voluptatum! Dolores fugit enim veritatis recusandae, veniam neque quas."
let woex_list_2 = document.createElement("li")
woex_list_2.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fugit nam earum asperiores beataedoloremque!"
let woex_list_3 = document.createElement("li")
woex_list_3.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga accusantium modi consequuntur? Ad laudantium quidem ipsum animi atque dolores sequi perferendis impedit, iusto deserunt excepturi."

woex.append(woex_list_1, woex_list_2, woex_list_3)
container_1.append(icon_containers, heading_1, p_1, icon_container_2, heading_2, technical_skills, skill_names, skill_range, additional_skills, a_skill_names, a_skill_range, icon_container_3, heading_3, wep_1, wep_2, wep_3, woex)

let container_2 = document.createElement("div")
container_2.setAttribute("class", "container-2")

let icon_containers_2 = document.createElement("div")
icon_containers_2.setAttribute("class", "icon-containers")

let icons_2 = document.createElement("div")
icons_2.setAttribute("class", "icons")

let breif_2 = document.createElement("img")
    //breif_2.src = "./images/briefcase.png"
icons_2.appendChild(breif_2)
icon_containers_2.appendChild(icons_2)

let heading_4 = document.createElement("h1")
heading_4.innerHTML = "Work Experience<br><br>"

let wep_4 = document.createElement("p")
wep_4.innerHTML = "<strong>Software Development Engineer</strong>"
wep_4.style.display = "inline-block"
wep_4.style.marginBottom = "0"

let wep_5 = document.createElement("p")
wep_5.innerText = "05/2018 - Present"
wep_5.style.float = "right"

let wep_6 = document.createElement("p")
wep_6.innerText = "Paypal"
wep_6.style.margin = "0"

let woex_2 = document.createElement("ul")
let woex_list_4 = document.createElement("li")
woex_list_4.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum incidunt unde voluptates voluptas voluptatem inventore."
let woex_list_5 = document.createElement("li")
woex_list_5.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, modi."
let woex_list_6 = document.createElement("li")
woex_list_6.innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis molestias cumque iste nam obcaecati totam quis, libero quas aliquam veritatis."

woex_2.append(woex_list_4, woex_list_5, woex_list_6)

let icon_containers_3 = document.createElement("div")
icon_containers_3.setAttribute("class", "icon-containers")
icon_containers_3.style.marginTop = "50px"

let icons_3 = document.createElement("div")
icons_3.setAttribute("class", "icons")

let mortar = document.createElement("img")
    //  mortar.src = "./images/mortarboard.png"
icons_3.appendChild(mortar)
icon_containers_3.appendChild(icons_3)
let heading_5 = document.createElement("h1")