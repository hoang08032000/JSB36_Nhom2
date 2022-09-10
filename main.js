

function Login(){

	function name_Verify(){
		if (namee.value.length > 5) {
			namee.style.border.bottom = "1px solid #fff";
			error_Username.style.display = "none";
			return true;
		}
	}
	function pass_Verify(){
		if (password.value.length > 5) {
			password.style.border = "1px solid silver";
			error_Password.style.display = "none";
			return true;
		}
	}
	function pass2_Verify(){
		if (password.value === password2.value) {
			password2.style.border = "1px solid silver";
			error_Password2.style.display = "none";
			return true;
		}
	}
	
	
	namee.addEventListener('textInput', name_Verify);
	password.addEventListener('textInput', pass_Verify);
	password2.addEventListener('textInput', pass2_Verify);
	}

function validated(){
	if (namee.value.length <= 6) {
		namee.style.border = "1px solid red";
		error_Username.style.display = "block";
		namee.focus();
		return false;
	}
	if (password.value.length < 6) {
		password.style.border = "1px solid red";
		error_Password.style.display = "block";
		password.focus();
		return false;
	}
    if (password.value != password2.value) {
		password2.style.border = "1px solid red";
		error_Password2.style.display = "block";
		password2.focus();
		return false;
	}
    if (email.value.trim() === '') {
        email.style.border = "1px solid red";
		error_Email.style.display = "block";
		email.focus();
		return false;
    } else if (!isEmail(email)) {
		email.style.border = "1px solid red";
		error_Email.style.display = "block";
		email.focus();
		return false;
    }

    function isEmail(email) {
        return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email);
    }


}



var defaultThreads = [
    {
        id: 1,
        title: "Hello guys",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Jack",
                date: Date.now(),
                content: "Hey there"
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "Hey to you too"
            }
        ]
    },
    {
        id: 2,
        title: "I think Leviathan best team",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "Jack",
                date: Date.now(),
                content: "Nah bro im paperboy"
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "noo DRX best"
            }
        ]
    }
]

var Posts = [
    {
        id: 1,
        title: "FPX return to defend their throne",
        author: "Dazzle Alec",
        date: Date.now(),
        content: "<p>After a season riddled with adversity, FunPlus Phoenix finally lifted a trophy and became a Masters winner in Copenhagen.<br>Now the defending champions, they return to the international stage to cement themselves in the top echelon of Valorant and to prove they should've been there a long time ago.<br>“Inside the team and anyone in Europe who practices against us knows we are one of the best,” ardiis said. “We won EMEA the first time, we got second the second time, and we won Copenhagen. Second-place is the worst finish we've had, people have just not rated us highly because we haven't played much internationally. I think the expectation for our team should be top four at every event. It's just a matter of time before fans start to realize and understand that.”</p>",
        comments: [
            {
                author: "Jack",
                date: Date.now(),
                content: "I think FPX deserved it"
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "Yeah FPX definitely got the champions' throne"
            }
        ]
    },
    {
        id: 2,
        title: "Thread 2",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "Jack",
                date: Date.now(),
                content: "Hey there"
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "Hey to you too"
            }
        ]
    },
    {
        id: 3,
        title: "Thread 3",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "Jack",
                date: Date.now(),
                content: "Hey there"
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "Hey to you too"
            }
        ]
    },
    {
        id: 4,
        title: "Thread 4",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "Jack",
                date: Date.now(),
                content: "Hey there"
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "Hey to you too"
            }
        ]
    },
    {
        id: 5,
        title: "Thread 5",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "Jack",
                date: Date.now(),
                content: "Hey there"
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "Hey to you too"
            }
        ]
    },
    
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}

