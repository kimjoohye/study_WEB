<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h2>JSTL : redirect</h2>
	<hr/>

  <c:redirect url="https://search.daum.net/search">
   <c:param name="w" value="blog" />
   <c:param name="q" value="하늘공원" />
  </c:redirect>

</body>
</html>