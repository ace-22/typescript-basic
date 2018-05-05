class youtube{

    constructor( private songName:string,private artist:string, private views:number, private likes:number,
                 private dislikes:number, private subscribed:string, private subscribedMembersnum:number, 
                 private publishingDate:string, private numberOfComments:number,private commentPerson:string, private latestComment:string,
                 private recommandedVideos:string[])
    {
        this.songName=songName
        this.artist=artist
        this.views=views
        this.likes=likes
        this.dislikes=dislikes
        this.subscribed=subscribed
        this.subscribedMembersnum=subscribedMembersnum
        this.publishingDate=publishingDate
        this.numberOfComments=numberOfComments
        this.commentPerson=commentPerson
        this.latestComment=latestComment
        this.recommandedVideos=recommandedVideos
    }
    getsongName=()=>{
        return this.songName
    }
    getartist=()=>{
        return this.artist
    }
    getlikes=()=>{
        return this.likes
    }
    getdislikes=()=>{
        return this.dislikes
    }
    getsubscribed=()=>{
        return this.subscribed
    }
    getsubscribedMembersnum=()=>{
        return this.subscribedMembersnum
    }
    getpublishingDate=()=>{
        return this.publishingDate
    }
    getnumberOfComments=()=>{
        return this.numberOfComments
    }
    getnameOfPerson=()=>{
        return this.commentPerson
    }
    getlatestComment=()=>{
        return this.latestComment
    }
    setmycomment=(myComment:string)=>{
         this.latestComment=myComment
         return this.latestComment
    }
    getrecommandedVideos=()=>{
        return this.recommandedVideos
    }
      
    

}
let firstSong=new youtube("Last Night","Ed Sheeran ft. Alan Walker & The Chainsmokers",1738553,26000,1400,"yes",23000," Apr 11, 2018",343,"Chester Bennington","Great song",["Labrinth-jealous","One-republic-Lets hurt tonight","Passengers-Let her go","Eagles-Hotel california","Zayn Malik-Dusk till Dawn","LP-Lost on You","Pink Floyd-Comfortably Numb","Linkin Park-Leave out all the rest","Lauv-ILYSB","James Arthur-Impossible"])
console.log("---------------------------Youtube Page Details------------------")
console.log("Song-1-"+firstSong.getsongName())
console.log("Artist-"+firstSong.getartist())
console.log("Likes-"+firstSong.getlikes())
console.log("Dislikes-"+firstSong.getdislikes())
console.log("Subscribed-"+firstSong.getsubscribed())
console.log("Present Subscribed members-"+firstSong.getsubscribedMembersnum())
console.log("Published on-"+firstSong.getpublishingDate())
console.log("Number of comments-"+firstSong.getnumberOfComments())
console.log(firstSong.getnameOfPerson()+" "+"-"+" "+firstSong.getlatestComment())
console.log("My comment entered right now-"+firstSong.setmycomment("Much more expected from chainsmokers and ed sheeran"))
console.log("Recommended Videos-"+firstSong.getrecommandedVideos())


class facebook{
    constructor(private nameOfPerson:string,private profession:string, private age:number,
                private birthday:string,private livesAt:string,private hometown:string,
                private educationHighSchool:string,private degreeName:string,private college:string,
                private contactNumber:number,private email:string,private favQuote:string,
                private friends:number,private interests:string[],private familyMembers:string[] )

    

 {
    this.nameOfPerson=nameOfPerson
    this.profession=profession 
    this.age=age
    this.birthday=birthday
    this.livesAt=livesAt
    this.hometown=hometown
    this.educationHighSchool=educationHighSchool
    this.college=college
    this.contactNumber=contactNumber
    this.email=email
    this.favQuote=favQuote
    this.friends=friends
    this.interests=interests
    this.familyMembers=familyMembers

   }

   getname=()=>{
       return this.nameOfPerson
   }
   getprofession=()=>{
       return this.profession
   }
   getage=()=>{
       return this.age
   }
   getbirthday=()=>{
       return this.birthday
   }
   getlivesAt=()=>{
    return this.livesAt
   }
   gethometown=()=>{
    return this.hometown
   }
   geteducationHighSchool=()=>{
    return this.educationHighSchool
   }
   getcollege=()=>{
    return this.college
   }
   getcontact=()=>{
    return this.contactNumber
   }
   getemail=()=>{
    return this.email
   }
   getquote=()=>{
    return this.favQuote
   }
   getfriends=()=>{
    return this.friends
   }
   getinterests=()=>{
    return this.interests
   }
   getfamily=()=>{
    return this.familyMembers
   }
   getdegree=()=>{
    return this.degreeName
   }

    

}
let someone=new facebook("shivam sharma","Businessman",32,"21/02/1986","Mumbai,maharastra","Udaipur,Rajasthan","Delhi Public School,Udaipur,Rajasthan","B.tech","IIT-Delhi",8754297011, "shivam.sharma@rediffmailcom","calm waters never made a great sailor",856,["Lawn-tennis","cricket","guitar"],["Father:Pushkar Sharma","Mother:Shalini Sharma","Brother:Abhinav Sharma"])
console.log("--------------------------Facebook User Details----------------")
console.log("Name-"+someone.getname())
console.log("Profession-"+someone.getprofession())
console.log("Age-"+someone.getage())
console.log("Birthday-"+someone.getbirthday())
console.log("Lives at-"+someone.getlivesAt())
console.log("Hometown-"+someone.gethometown())
console.log("High school-"+someone.geteducationHighSchool())
console.log("Bachelors degree-"+someone.getdegree()+" "+"From"+" "+someone.getcollege())
console.log("Contact info-"+someone.getcontact())
console.log("Email-"+someone.getemail())
console.log("Favorite Quote-"+someone.getquote())
console.log("Family members-"+someone.getfamily())
console.log("Interests-"+someone.getinterests())

