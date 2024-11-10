//document.write("<tr><th>Subjects</th><th>marks</th><th>out of</th></tr>");
let Name="Saima Majid";
let rollno= 23; 
let name="miss Hina Imtiaz";
let cls="M.A";
let emarks=78;
let umarks=89;
let pmarks=78;
let cmarks=58;
let imarks=90;
let total= emarks+umarks+pmarks+cmarks+imarks;
let per= total/500*100;
let grade;
 if(per<=100 && per>=89)//90-100
{grade="A+";}
else if(per<90 && per>=80)//80-89
    {grade="A";}
else if(per<=80 && per>=70)//70-79
    {grade="B";}
else if (per<=70 && per>=60)//60-69
    {grade="C";}
else if(per<=60 && per>=50)//50-59
{grade="D";}
   else{(grade="E")}
   //now create marksheet
   document.write("<br>Roll no:",rollno);
document.write("<br>Name:",Name );
document.write("<br>Teacher Name:",name);
document.write("<table border=4>");
document.write("<tr><th>subjects</th><th>marks obtained</th><th>out of</th></tr>");
document.write("<tr><td>English</td><td>",emarks,"</td><td>100</td>");
document.write("<tr><td>Urdu</td><td>",umarks,"</td><td>100</td>");
document.write("<tr><td>Pakistan Studies</td><td>",pmarks,"</td><td>100</td>");
document.write("<tr><td>Computer</td><td>",cmarks,"</td><td>100</td>");
document.write("<tr><td>Islamiat</td><td>",imarks,"</td><td>100</td>");
document.write("<tr><td>total</td><td>",total,"</td><td>500</td>");
document.write("<tr><td>percetage</td><td>",per,",</td><td></td>");
document.write("<tr><td>Grade</td><td>",grade,"</td><td></td>");


