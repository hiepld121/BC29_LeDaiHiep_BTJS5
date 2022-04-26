function xetKhuVuc(khuVuc){

    if(khuVuc === "A"){
        return 2;
    }else if(khuVuc === "B"){
        return 1;
    }else if(khuVuc === "C"){
        return 0.5;
    }else{
        return 0;
    }

}

function xetDoiTuong(dtut){
    if(dtut === "A"){
       return 2.5;
    }else if(dtut === "B"){
        return 1.5;
    }else if(dtut === "C"){
        return 1;
    }
}




document.getElementById("btnResult").onclick = function(){
    var diemChuan = document.getElementById("inputScore1").value*1;

    
    var diem1 = document.getElementById("inputScore2").value*1;
    var diem2 = document.getElementById("inputScore3").value*1;
    var diem3 = document.getElementById("inputScore4").value*1;

    var khuVuc;
    var dtut = xetDoiTuong(dtut);
    var diemCong = xetKhuVuc(khuVuc);

    var diem = diem1 + diem2 + diem3;
  
    if (diemChuan<30 && diemChuan>0){
       
        if(diem >= diemChuan && diemChuan < 30){
            document.getElementById("txtResult").innerHTML = "Bạn đã đậu. Tổng điểm là: " + diem;
        }else{
            document.getElementById("txtResult").innerHTML = "Bạn đã rớt. Tổng điểm là: " + diem;
        }
        }else{
        document.getElementById("txtResult").innerHTML = "Nhập lại điểm chuẩn";}
    

}


document.getElementById("btnElecBill").onclick = function(){
    var soKw = document.getElementById("inputKW").value*1;
    var tienDien, tongTien;

    if(soKw <= 50 && soKw > 0){
        tienDien = 500;
        tongTien =  tienDien*soKw ;
    }else  if (soKw > 50 && soKw <= 100){
        tienDien = 650;
        tongTien =  tienDien*(soKw-50) + 500*50;
    }else if(soKw > 100 && soKw <= 200){
        tienDien = 850;
        tongTien = tienDien*(soKw-100) + 650*100 +500*50;
    }else if(soKw > 200 && soKw <= 350){
        tienDien = 850;
        tongTien = tienDien*(soKw-200) + 650*200 +500*50;
    }else{
        tienDien = 1100;
        tongTien = tienDien*(soKw-250) + 850*350 + 650*100 +500*50;
    }

    document.getElementById("txtElecBill").innerHTML = "Tiền điện là: " + new Intl.NumberFormat().format(tongTien);
}

