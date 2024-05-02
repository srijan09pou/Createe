function myFunction() {
    alert('Button clicked!');
}

    function navigateToPage(page) {
        const pages = ['home', 'friends', 'notifications', 'groups', 'chat', 'tv', 'search', 'menu', 'comment'];
        if (pages.includes(page)) {
            window.location.href = `${page}.html`;
        } else {
            console.log(`Navigate to ${page} page`);
        }
    }

// Retrieve the logged-in user from local storage
        var loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

        // Check if a user is logged in
        if (loggedInUser) {
            // Access user information
            var username = loggedInUser.username;
            var avatar = loggedInUser.avatar;

            // Display user information on the page
            document.querySelector('.username').innerText = username;
            document.querySelector('.avatar').src = avatar;
        } else {
            // Redirect to the login page if not logged in
            window.location.href = 'login.html'; // Adjust the login page URL accordingly
        }


function openProfilePage() {
            // Redirect to the profile page
            window.location.href = 'profile.html';
        }

        function openAddTitlePage() {
            // Redirect to the new page for adding a title
            window.location.href = 'add-title-page.html';
        }

        function navigateToSharePost() { 
// Navigate to Page 1 where the file selection will be triggered 
window.location.href = 'sharepost.html'; 
}

        function handleImageChange(files) {
            if (files.length > 0) {
                const imageUrl = URL.createObjectURL(files[0]);
                // Save the image URL to local storage for retrieval on the new page
                localStorage.setItem('selectedImageUrl', imageUrl);

                // Redirect to the new page for adding a title
                window.location.href = 'add-title-page.html';
            }
        }
        
        
        
        // Third Part
        
        function addImage(inputId, previewImageId) {
            const postImageInput = document.getElementById(inputId);
            const previewImage = document.getElementById(previewImageId);

            postImageInput.click();

            postImageInput.onchange = function () {
                if (postImageInput.files.length > 0) {
                    const reader = new FileReader();
                    reader.onload = function (e) {
                        previewImage.src = e.target.result;
                        previewImage.style.display = 'block';
                    };
                    reader.readAsDataURL(postImageInput.files[0]);
                } else {
                    previewImage.style.display = 'none';
                }
            };
        }
        
          // Third Part Ends
        
function toggleCommentModal(postId) {
    var modal = document.getElementById('commentModal_' + postId);
    modal.style.display = (modal.style.display === 'block') ? 'none' : 'block';

  // Toggle body scrolling
    toggleBodyScrolling();
}

function toggleOptionsMenu(postId) {
    var modal = document.getElementById('optionsModal_' + postId);
    modal.style.display = (modal.style.display === 'block') ? 'none' : 'block';

    // Toggle body scrolling
    toggleBodyScrolling();
}

function shareButtonClicked(postId) {
    var shareOptions = document.getElementById('shareOptions_' + postId);
    shareOptions.style.display = (shareOptions.style.display === 'block') ? 'none' : 'block';

    // Toggle body scrolling
    toggleBodyScrolling();
}

function toggleBodyScrolling() {
    var body = document.body;
    body.style.overflow = (body.style.overflow === 'hidden') ? 'auto' : 'hidden';
}

        function closeShareOptions(postId) {
    var shareOptions = document.getElementById('shareOptions_' + postId);
    shareOptions.style.display = 'none';
    document.body.style.overflow = 'auto';
    document.body.style.position = 'static';
}

        function closeCommentModal(postId) {
    var modal = document.getElementById('commentModal_' + postId);
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    document.body.style.position = 'static';
}

        function closeOptionsMenu(postId) {
    var modal = document.getElementById('optionsModal_' + postId);
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    document.body.style.position = 'static';
}
    
    let isLiked = [false, false]; // Array to store like statuses
    let reactionsVisible = [false, false]; // Array to store reactions visibility
    let longPressTimers = [null, null]; // Array to store long press timers

    function startLongPress(event) {
      const boxId = event.target.closest('.boxes').id;
      const index = parseInt(boxId.slice(-1)) - 1;
      longPressTimers[index] = setTimeout(function() {
        toggleReactions(index); // Corrected the index
      }, 500);
    }

    function endLongPress() {
      longPressTimers.forEach(timer => clearTimeout(timer));
    }

function toggleReactions(index) {
  const reactions = document.getElementById(`reactionsContainer`);
  reactions.style.display = reactionsVisible[index] ? 'none' : 'flex';
  reactionsVisible[index] = !reactionsVisible[index];

  const boxes = document.querySelectorAll('.boxes');
  boxes.forEach(box => {
    if (box.id === `box${index + 1}`) {
      box.classList.toggle('active');
    } else {
      box.classList.remove('active');
    }
  });
// Toggle body scrolling
    toggleBodyScrolling();
}

    function setReaction(reaction) {
  const activeBoxId = document.querySelector('.boxes.active').id;
  const index = parseInt(activeBoxId.slice(-1)) - 1;
  const likeButton = document.getElementById(`likeButton${index + 1}`);
  likeButton.src = reaction;
  likeButton.style.cursor = "pointer";
  likeButton.setAttribute("onclick", `changeToLike(${index})`);
  toggleReactions(index);
  isLiked[index] = true;
}

    function changeToLike(index) {
      const likeButton = document.getElementById(`likeButton${index + 1}`);
      likeButton.src = 'like.png';
      isLiked[index] = false;
    }

    function toggleLike(event) {
      const boxId = event.target.closest('.box').id;
      const index = parseInt(boxId.slice(-1)) - 1;
      const likeButton = document.getElementById(`likeButton${index + 1}`);
      likeButton.src = isLiked[index] ? 'like.png' : 'liked.png'; // Adjusted the image paths
      isLiked[index] = !isLiked[index]; // Toggle the like status
    }
    
    
    // Modal Alerts
    
    // Share Modal Alerts
    function shareOnFacebook() {
    // Add actual sharing functionality for Facebook here
    alert('Sharing on Facebook!');
    closeShareModal();
  }

  function shareWithFriends() {
    // Add actual sharing functionality for Friends here
    alert('Sharing with Friends!');
    closeShareModal();
  }

  function shareOnMessenger() {
    // Add actual sharing functionality for Messenger here
    alert('Sharing on Messenger!');
    closeShareModal();
  }

  function shareOnGroup() {
    // Add actual sharing functionality for Group here
    alert('Sharing on Group!');
    closeShareModal();
  }

  function shareOnPage() {
    // Add actual sharing functionality for Page here
    alert('Sharing on Page!');
    closeShareModal();
  }

  function showMoreOptions() {
    // Add more sharing options or navigate to another page with additional options
    alert('More options!');
    closeShareModal();
  }
       
       // Option Modal Alerts
       function followAction() {
    alert("Follow clicked");
    // Add your follow functionality here
    toggleOptions();
  }

  function saveAction() {
    alert("Save clicked");
    // Add your save functionality here
    toggleOptions();
  }

  function reportAction() {
    alert("Report clicked");
    // Add your report functionality here
    toggleOptions();
  }
