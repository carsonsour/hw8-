const submitBtn = document.querySelector("#submit");
      submitBtn.addEventListener('click', function(e) {
        e.preventDefault();

        const name = document.querySelector("input[name='name']").value;
        const email = document.querySelector("input[name='email']").value;
        const payment = document.querySelector("input[name='payment']:checked").value;
        const promo = document.querySelector("input[name='promo']:checked");
        const promoval = promo ? "on" : "off";
        const loc = document.querySelector("#loc");
        const locval = loc.options[loc.selectedIndex].value;
        console.log(locval);
      
        displayTable(name, email, payment, promoval, locval);
      });

      function displayTable(name, email, payment, promotion, location) {
        let str = `<p>Form Data Entered</p>`;
        str += `<table>`;
        str += `<tr><th>Key</th><th>Value</th></tr>`;
        str += `<tr><td>name</td><td>${name}</td></tr>`;
        str += `<tr><td>email</td><td>${email}</td></tr>`;
        str += `<tr><td>payment</td><td>${payment}</td></tr>`;
        str += `<tr><td>promotion</td><td>${promotion}</td></tr>`;
        str += `<tr><td>location</td><td>${location}</td></tr>`;
        str += `</table>`;

        const tableCont = document.querySelector("#table_cont");
        tableCont.innerHTML = str;
      }