const url=`https://total-ifood.onrender.com/get_total_ifood`;window.addEventListener("load",()=>{const a=document.querySelector(".loader");a.classList.add("loader-hidden"),a.addEventListener("transitionend",()=>{a.classList.contains("loader-hidden")&&document.body.removeChild(a)})});function fillScreenWithData(a){const b=document.getElementById("balance"),c=document.getElementById("period"),d=document.querySelectorAll("#restaurantes_spents li"),e=document.querySelectorAll("#restaurantes_ordered li"),f={PIX:document.getElementById("pix_balance"),CREDIT:document.getElementById("credit_balance"),DEBIT:document.getElementById("debit_balance"),DIGITAL_WALLET:document.getElementById("digital_wallet_balance"),CASH:document.getElementById("cash_balance"),BANK_PAY:document.getElementById("bank_pay_balance"),VOUCHER:document.getElementById("voucher_balance")};let g=a.total_spent,h=a.time_period,i=a.top_restaurants_by_spending,j=a.top_restaurants_by_orders,k=a.payment_methods,l=a.currency;const{days:m,end_date:n,months:o,start_date:p,years:q}=h;for(let h in b.innerHTML=`${g} ${l}`,c.innerHTML=`${q} ano(s), ${o} mes(es) e ${m} dia(s) (${p} - ${n})`,d.forEach((a,b)=>{i[b]&&(a.innerHTML=`${i[b].name}: ${i[b].orders} pedidos, totalizando ${i[b].total_spent} ${l}`)}),e.forEach((a,b)=>{j[b]&&(a.innerHTML=`${j[b].name}: ${j[b].orders} pedidos, totalizando ${j[b].total_spent} ${l}`)}),f)if(f[h]){const a=void 0===k[h]?0:k[h];f[h].innerHTML=`${a} ${l}`}}async function getDatas(a){const b=document.querySelector(".loader");try{b.classList.remove("loader-hidden");const c=await fetch(url,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:a})});if(!c.ok)throw new Error(`HTTP error! Status: ${c.status}`);const d=await c.json();fillScreenWithData(d)}catch(a){console.log("Error:",a)}finally{b.classList.add("loader-hidden")}}function buttonPressed(){const a=document.getElementById("token").value;getDatas(a)}const button=document.getElementById("calculate_total");button.addEventListener("click",buttonPressed);