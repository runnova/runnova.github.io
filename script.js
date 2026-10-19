const API_URL = "https://api.rotur.dev/v2/posts/df862c5ad9d4ba17970086d6c1039c2d";
const FALLBACK_AVATAR = "https://avatars.rotur.dev/undefined";
const INTERVAL = 5000;

const viewport = document.getElementById("viewport");
const counter = document.getElementById("counter");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let replies = [];
let currentIndex = 0;
let timer = null;
let transitionTimeout = null;

function formatTimestamp(timestamp) {
    const date = new Date(timestamp);

    if (Number.isNaN(date.getTime())) {
        return "Unknown time";
    }

    return new Intl.DateTimeFormat(undefined, {
        dateStyle: "medium",
        timeStyle: "short"
    }).format(date);
}

function createComment(reply) {
    const article = document.createElement("article");
    article.className = "comment";

    const user = document.createElement("div");
    user.className = "user";

    const avatar = document.createElement("img");
    avatar.className = "avatar";
    avatar.src = reply.author?.avatar_url || reply.avatar_url || `https://avatars.rotur.dev/${reply.user}`;
    avatar.alt = "";
    avatar.referrerPolicy = "no-referrer";
    avatar.onerror = () => {
        avatar.onerror = null;
        avatar.src = FALLBACK_AVATAR;
    };

    const details = document.createElement("div");

    const username = document.createElement("div");
    username.className = "username";
    username.textContent =
        reply.author?.display_name ||
        reply.author?.username ||
        reply.user ||
        "Unknown user";

    const timestamp = document.createElement("div");
    timestamp.className = "timestamp";
    timestamp.textContent = formatTimestamp(reply.timestamp);

    details.append(username, timestamp);
    user.append(avatar, details);

    const content = document.createElement("div");
    content.className = "content";
    content.textContent = reply.content || "";

    article.append(user, content);
    return article;
}

function updateControls() {
    counter.textContent = replies.length
        ? `${currentIndex + 1} / ${replies.length}`
        : "0 / 0";

    prevButton.disabled = replies.length < 2;
    nextButton.disabled = replies.length < 2;
}

function showReply(index, animate = true) {
    if (!replies.length) {
        return;
    }

    currentIndex = (index + replies.length) % replies.length;

    clearTimeout(transitionTimeout);

    const existing = viewport.querySelector(".comment");

    if (existing && animate) {
        existing.classList.add("exit");

        transitionTimeout = setTimeout(() => {
            renderCurrentReply();
        }, 180);
    } else {
        renderCurrentReply();
    }

    updateControls();
}

function renderCurrentReply() {
    const comment = createComment(replies[currentIndex]);
    viewport.replaceChildren(comment);
}

function startSlideshow() {
    clearInterval(timer);

    if (replies.length > 1) {
        timer = setInterval(() => {
            showReply(currentIndex + 1);
        }, INTERVAL);
    }
}

prevButton.addEventListener("click", () => {
    showReply(currentIndex - 1);
    startSlideshow();
});

nextButton.addEventListener("click", () => {
    showReply(currentIndex + 1);
    startSlideshow();
});

async function loadReplies() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const post = await response.json();
        replies = Array.isArray(post.replies) ? post.replies : [];

        if (!replies.length) {
            viewport.innerHTML = "";
            const status = document.createElement("div");
            status.className = "status";
            status.textContent = "No replies yet.";
            viewport.append(status);
            updateControls();
            return;
        }

        showReply(0, false);
        startSlideshow();
    } catch (error) {
        const status = document.createElement("div");
        status.className = "status";
        status.textContent =
            "Unable to load replies. Check the API or CORS settings.";
        viewport.replaceChildren(status);
        console.error("Failed to fetch replies:", error);
    }
}

loadReplies();

document.querySelectorAll('a').forEach(a => {
    a.setAttribute('target', '_blank');
});
