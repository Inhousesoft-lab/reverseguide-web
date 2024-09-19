export function formatRelativeTime(dateString) {
  const now = new Date();
  const past = new Date(dateString);
  const diffInSeconds = Math.floor((now - past) / 1000);

  const hours = Math.floor(diffInSeconds / 3600);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years > 0) {
    return `${years}년전`;
  } else if (months > 0) {
    return `${months}개월전`;
  } else if (days > 0) {
    return `${days}일전`;
  } else if (hours > 0) {
    return `${hours}시간전`;
  } else {
    return "방금 전";
  }
}

export function formatApplicationDeadline(dateString) {
  const now = new Date();
  now.setHours(0, 0, 0, 0); // Set to start of day for accurate comparison
  const deadline = new Date(dateString);
  deadline.setHours(0, 0, 0, 0);

  const diffTime = deadline - now;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return "오늘마감";
  } else if (diffDays > 0) {
    return `${Math.abs(diffDays)}일전`;
  } else if (diffDays < 0) {
    return `마감`;
  } else {
    // For dates more than 99 days in the past or future
    return deadline.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
}
