var names=new Array();
names[0]="Taeyong";
names[1]="Johnny";
names[2]="Yuta";
names[3]="Doyoung";
names[4]="Jaehyun";
names[5]="Winwin";
names[6]="Jungwoo";
names[7]="Taeil";
names[8]="Mark";
names[9]="Haechan";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}