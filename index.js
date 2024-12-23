const container = document.getElementById("container");

const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
  createUsers(data);
};

const createUsers = (data) => {
  data.map((user) => {
    const mainDiv = document.createElement("div");
    const childDiv1 = document.createElement("div");
    const childDiv2 = document.createElement("div");

    mainDiv.classList.add("mainDivStyle");

    childDiv2.classList.add("childDiv2Style");
    childDiv1.classList.add("childDiv1Style");
    childDiv1.addEventListener("click", () => {
      childDiv2.style.display =
        childDiv2.style.display === "block" ? "none" : "block";

    });

    const header = document.createElement("h3");
    header.innerText = user.name;

    childDiv1.appendChild(header);

    const keys = Object.keys(user);

    keys.map((key) => {
      if (key === "address") {
        const _p1 = document.createElement("p");
        _p1.innerText = "address{ ";
        const _p2 = document.createElement("p");
        _p2.innerText = " }";
        childDiv2.append(_p1);
        const address = user["address"];
        const addressKeys = Object.keys(address);
        addressKeys.map((addressKey) => {
          if (addressKey === "geo") {
            const lat = document.createElement("p");
            const lng = document.createElement("p");
            const l1 = document.createElement("p");
            const l2 = document.createElement("p");

            l1.innerText = "geo: { lat: ";
            l2.innerText = "lng: ";

            const div1 = document.createElement("div");
            div1.classList.add("div1Style");
            const div2 = document.createElement("div");
            div2.classList.add("div1Style");

            div1.appendChild(l1);
            div1.appendChild(lat);

            div2.appendChild(l2);
            div2.appendChild(lng);

            lat.innerText = address["geo"].lat;
            lng.innerText = address["geo"].lng + " }";
            childDiv2.append(div1);
            childDiv2.append(div2);
          } else {
            const p1 = document.createElement("p");
            const p2 = document.createElement("p");
            p1.innerText = addressKey + ": ";
            p2.innerText = address[addressKey];
            const div1 = document.createElement("div");
            div1.classList.add("div1Style");

            div1.append(p1);
            div1.append(p2);
            childDiv2.append(div1);
          }
          childDiv2.append(_p2);
        });
      } else if (key === "company") {
        const _p3 = document.createElement("p");
        _p3.innerText = "company{ ";

        const _p4 = document.createElement("p");
        _p4.innerText = " }";

        childDiv2.append(_p3);
        const company = user["company"];
        const companyKeys = Object.keys(company);

        companyKeys.map((companyKey) => {
          const p1 = document.createElement("p");
          p1.innerText = companyKey + ": ";

          const p2 = document.createElement("p");
          p2.innerText = company[companyKey];

          const div3 = document.createElement("div");
          div3.classList.add("div1Style");
          div3.append(p1);
          div3.append(p2);
          childDiv2.appendChild(div3);
        });
        childDiv2.append(_p4);
      } else if (key === "name") {
      } else {
        const element = user[key];
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        p1.innerText = key + ": ";
        console.log(p1);
        p2.innerText = element;

        const div1 = document.createElement("div");
        div1.classList.add("div1Style");

        div1.append(p1);
        div1.append(p2);
        console.log(div1);

        childDiv2.appendChild(div1);
      }
    });
    mainDiv.appendChild(childDiv1);
    mainDiv.appendChild(childDiv2);
    container.append(mainDiv);
  });
};

getUsers();
