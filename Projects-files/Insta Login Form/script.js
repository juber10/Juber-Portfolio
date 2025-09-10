
    // Tiny interactive helpers (optional)
    const followBtn = document.getElementById('followBtn');
    const followersCountEl = document.getElementById('followersCount');

    // parse numbers like "1,234" to int
    function parseNum(str){
      return parseInt(String(str).replace(/,/g,''), 10) || 0;
    }
    function formatNum(n){
      return n.toLocaleString();
    }

    followBtn.addEventListener('click', () => {
      const isFollowing = followBtn.getAttribute('aria-pressed') === 'true';
      let count = parseNum(followersCountEl.textContent);
      if(isFollowing){
        // unfollow
        followBtn.textContent = 'Follow';
        followBtn.setAttribute('aria-pressed','false');
        count = Math.max(0, count - 1);
      } else {
        // follow
        followBtn.textContent = 'Following';
        followBtn.setAttribute('aria-pressed','true');
        count = count + 1;
      }
      followersCountEl.textContent = formatNum(count);
    });

    // Example function to programmatically set stats
    // call setStats({followers: 2000, posts: 50, following: 180})
    function setStats({followers, posts, following, name, handle}) {
      if(typeof followers !== 'undefined') document.getElementById('followersCount').textContent = formatNum(followers);
      if(typeof posts !== 'undefined') document.getElementById('postsCount').textContent = formatNum(posts);
      if(typeof following !== 'undefined') document.getElementById('followingCount').textContent = formatNum(following);
      if(name) document.getElementById('userName').textContent = name;
      if(handle) document.getElementById('userHandle').textContent = handle;
    }

    // Optional: demo update after 1.5s
    // setTimeout(()=> setStats({followers: 1420, posts: 130, following: 410}), 1500);
