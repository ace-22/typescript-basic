var youtube = /** @class */ (function () {
    function youtube(songName, artist, views, likes, dislikes, subscribed, subscribedMembersnum, publishingDate, numberOfComments, commentPerson, latestComment, recommandedVideos) {
        var _this = this;
        this.songName = songName;
        this.artist = artist;
        this.views = views;
        this.likes = likes;
        this.dislikes = dislikes;
        this.subscribed = subscribed;
        this.subscribedMembersnum = subscribedMembersnum;
        this.publishingDate = publishingDate;
        this.numberOfComments = numberOfComments;
        this.commentPerson = commentPerson;
        this.latestComment = latestComment;
        this.recommandedVideos = recommandedVideos;
        this.getsongName = function () {
            return _this.songName;
        };
        this.getartist = function () {
            return _this.artist;
        };
        this.getlikes = function () {
            return _this.likes;
        };
        this.getdislikes = function () {
            return _this.dislikes;
        };
        this.getsubscribed = function () {
            return _this.subscribed;
        };
        this.getsubscribedMembersnum = function () {
            return _this.subscribedMembersnum;
        };
        this.getpublishingDate = function () {
            return _this.publishingDate;
        };
        this.getnumberOfComments = function () {
            return _this.numberOfComments;
        };
        this.getnameOfPerson = function () {
            return _this.commentPerson;
        };
        this.getlatestComment = function () {
            return _this.latestComment;
        };
        this.setmycomment = function (myComment) {
            _this.latestComment = myComment;
            return _this.latestComment;
        };
        this.getrecommandedVideos = function () {
            return _this.recommandedVideos;
        };
        this.songName = songName;
        this.artist = artist;
        this.views = views;
        this.likes = likes;
        this.dislikes = dislikes;
        this.subscribed = subscribed;
        this.subscribedMembersnum = subscribedMembersnum;
        this.publishingDate = publishingDate;
        this.numberOfComments = numberOfComments;
        this.commentPerson = commentPerson;
        this.latestComment = latestComment;
        this.recommandedVideos = recommandedVideos;
    }
    return youtube;
}());
var firstSong = new youtube("Last Night", "Ed Sheeran ft. Alan Walker & The Chainsmokers", 1738553, 26000, 1400, "yes", 23000, " Apr 11, 2018", 343, "Chester Bennington", "Great song", ["Labrinth-jealous", "One-republic-Lets hurt tonight", "Passengers-Let her go", "Eagles-Hotel california", "Zayn Malik-Dusk till Dawn", "LP-Lost on You", "Pink Floyd-Comfortably Numb", "Linkin Park-Leave out all the rest", "Lauv-ILYSB", "James Arthur-Impossible"]);
console.log("---------------------------Youtube Page Details------------------");
console.log("Song-1-" + firstSong.getsongName());
console.log("Artist-" + firstSong.getartist());
console.log("Likes-" + firstSong.getlikes());
console.log("Dislikes-" + firstSong.getdislikes());
console.log("Subscribed-" + firstSong.getsubscribed());
console.log("Present Subscribed members-" + firstSong.getsubscribedMembersnum());
console.log("Published on-" + firstSong.getpublishingDate());
console.log("Number of comments-" + firstSong.getnumberOfComments());
console.log(firstSong.getnameOfPerson() + " " + "-" + " " + firstSong.getlatestComment());
console.log("My comment entered right now-" + firstSong.setmycomment("Much more expected from chainsmokers and ed sheeran"));
console.log("Recommended Videos-" + firstSong.getrecommandedVideos());
var facebook = /** @class */ (function () {
    function facebook(nameOfPerson, profession, age, birthday, livesAt, hometown, educationHighSchool, degreeName, college, contactNumber, email, favQuote, friends, interests, familyMembers) {
        var _this = this;
        this.nameOfPerson = nameOfPerson;
        this.profession = profession;
        this.age = age;
        this.birthday = birthday;
        this.livesAt = livesAt;
        this.hometown = hometown;
        this.educationHighSchool = educationHighSchool;
        this.degreeName = degreeName;
        this.college = college;
        this.contactNumber = contactNumber;
        this.email = email;
        this.favQuote = favQuote;
        this.friends = friends;
        this.interests = interests;
        this.familyMembers = familyMembers;
        this.getname = function () {
            return _this.nameOfPerson;
        };
        this.getprofession = function () {
            return _this.profession;
        };
        this.getage = function () {
            return _this.age;
        };
        this.getbirthday = function () {
            return _this.birthday;
        };
        this.getlivesAt = function () {
            return _this.livesAt;
        };
        this.gethometown = function () {
            return _this.hometown;
        };
        this.geteducationHighSchool = function () {
            return _this.educationHighSchool;
        };
        this.getcollege = function () {
            return _this.college;
        };
        this.getcontact = function () {
            return _this.contactNumber;
        };
        this.getemail = function () {
            return _this.email;
        };
        this.getquote = function () {
            return _this.favQuote;
        };
        this.getfriends = function () {
            return _this.friends;
        };
        this.getinterests = function () {
            return _this.interests;
        };
        this.getfamily = function () {
            return _this.familyMembers;
        };
        this.getdegree = function () {
            return _this.degreeName;
        };
        this.nameOfPerson = nameOfPerson;
        this.profession = profession;
        this.age = age;
        this.birthday = birthday;
        this.livesAt = livesAt;
        this.hometown = hometown;
        this.educationHighSchool = educationHighSchool;
        this.college = college;
        this.contactNumber = contactNumber;
        this.email = email;
        this.favQuote = favQuote;
        this.friends = friends;
        this.interests = interests;
        this.familyMembers = familyMembers;
    }
    return facebook;
}());
var someone = new facebook("shivam sharma", "Businessman", 32, "21/02/1986", "Mumbai,maharastra", "Udaipur,Rajasthan", "Delhi Public School,Udaipur,Rajasthan", "B.tech", "IIT-Delhi", 8754297011, "shivam.sharma@rediffmailcom", "calm waters never made a great sailor", 856, ["Lawn-tennis", "cricket", "guitar"], ["Father:Pushkar Sharma", "Mother:Shalini Sharma", "Brother:Abhinav Sharma"]);
console.log("--------------------------Facebook User Details----------------");
console.log("Name-" + someone.getname());
console.log("Profession-" + someone.getprofession());
console.log("Age-" + someone.getage());
console.log("Birthday-" + someone.getbirthday());
console.log("Lives at-" + someone.getlivesAt());
console.log("Hometown-" + someone.gethometown());
console.log("High school-" + someone.geteducationHighSchool());
console.log("Bachelors degree-" + someone.getdegree() + " " + "From" + " " + someone.getcollege());
console.log("Contact info-" + someone.getcontact());
console.log("Email-" + someone.getemail());
console.log("Favorite Quote-" + someone.getquote());
console.log("Family members-" + someone.getfamily());
console.log("Interests-" + someone.getinterests());
