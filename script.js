        const form=document.getElementById('form');
        const expense=document.getElementById('expense-name');
        const amount=document.getElementById('expense-amount');
        const date=document.getElementById('expense-date');
        const list=document.getElementById('list');
        console.log(list);

        function addList(x,y,z){
            /*/td/*
            const th=document.createElement('th');
            th.textContent=date.value;
            const td1=document.createElement('td');
            td1.textContent=expense.value;
            const td2=document.createElement('td');
            td2.textContent=amount.value;
            //
            const editBtn=document.createElement('button');
            editBtn.textContent='Edit';
            const td3=document.createElement('td');
            td3.appendChild(editBtn);

            /// delete btn
            const deleteBtn=document.createElement('button');
            deleteBtn.textContent='XXX';
            const td4=document.createElement('td');
            td4.appendChild(deleteBtn);

            /// TR
            const tr=document.createElement('tr');
            tr.appendChild(th);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            return tr;*/
            const tr=document.createElement('tr');
            tr.innerHTML=`
            <th>${x}</th>
            <td>${y}</td>
            <td>${z}</td>
            <td> <button>Edit</button> </td>
            <td> <button>XXX</button> </td>
            `;
            return tr;

        

         
        }

        function editFun(x,y,z){
            const tr=document.createElement('tr');
            tr.innerHTML=` <th><input type="date" value="${x}"></th>
            <td><input type="text" value="${y}"></td>
            <td><input type="number" value="${z}" ></td>
            <td>
              <button>Save</button>
            </td>
            <td>
              <button>XXX</button>
            </td>`;

            return tr;
            
            
         }


        form.addEventListener('submit',(event)=>{
            const a=date.value;
            const b=expense.value;
            const c=amount.value;
         if(amount.value==='' || date.value==='' || expense.value===''){
            alert('Please fill in all required fields before submitting the form.');
         }else{
            const arr=[c,a];
         localStorage.setItem(b,JSON.stringify(arr));
            event.preventDefault();
         const tr1=addList(a,b,c);
         list.appendChild(tr1);
         date.value='';
         amount.value='';
         expense.value='';
         }
        })
 
/**
 * ----------------Button in Action-------------
 */
     
   

    list.addEventListener('click',(event)=>{
       // event.preventDefault();
        if(event.target.tagName==='BUTTON'){
            const button=event.target;
            const td=button.parentNode.parentNode;
            const ul=td.parentNode;
            if(button.textContent==='XXX'){
                ul.removeChild(td);
                localStorage.removeItem(td.children[1].textContent);
            }else if(button.textContent==='Edit'){
            
                const editBtn=event.target;
                const editTd=editBtn.parentNode.parentNode;
                const editTr=editTd.parentNode;
                const child=editTd.children;
                const x=child[0].textContent;
                const y=child[1].textContent;
                const z=child[2].textContent;

                localStorage.removeItem(y);


                editTr.insertBefore(editFun(x,y,z),editTd);
                editTr.removeChild(editTd);

            

                
            }else if(button.textContent==='Save'){
                const saveBtn=event.target;
                const saveTd=saveBtn.parentNode.parentNode;
                const saveTr=saveTd.parentNode;
                const saveTdChild=saveTd.children;
                const p=saveTdChild[0].firstElementChild.value;
                const q=saveTdChild[1].firstElementChild.value;
                const r=saveTdChild[2].firstElementChild.value;
                saveTr.insertBefore(addList(p,q,r),saveTd);
                saveTr.removeChild(saveTd);
                //console.log(q,r,p);
                const arr2=[r,p];
                localStorage.setItem(q,JSON.stringify(arr2));

            }
        }
    })
