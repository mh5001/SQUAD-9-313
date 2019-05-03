insert into public.clients(
	phoneNumber,
	firstname,
	surname
) values (
	${phoneNumber},
	${firstname},
	${surname}
) RETURNING id as client