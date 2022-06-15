> 스프링 부트 _ 슬기로운 코딩생활



# restfulAPI

```java
@RestController
public class UserProfileController {
	
	private Map<String, UserProfile> userMap;
	
	@PostConstruct
	public void init() {
		userMap = new HashMap<String, UserProfile>();
		userMap.put("1",new UserProfile("1","홍길동","111-1111","서울특별시"));
		userMap.put("2",new UserProfile("2","김철수","122-1111","서울특별시"));
		userMap.put("3",new UserProfile("3","구상모","133-1111","서울특별시"));
	}
	
	@GetMapping("/user/{id}")
	public UserProfile getUserProfile(@PathVariable("id") String id) {
		return userMap.get(id);
	}
	
	@GetMapping("/user/all")
	public List<UserProfile> getUserProfileList(){
		return new ArrayList<UserProfile>(userMap.values());
	}
	
	@PutMapping("/user/{id}")
	public void putUserProfile(@PathVariable("id") String id ,@RequestParam("name") String name, @RequestParam("phone") String phone, @RequestParam("address") String address) {
		UserProfile userProfile = new UserProfile(id ,name, phone, address);
		userMap.put(id, userProfile);
	}
	
	@PostMapping("/user/{id}")
	public void postUserProfile(@PathVariable("id") String id ,@RequestParam("name") String name, @RequestParam("phone") String phone, @RequestParam("address") String address) {
		UserProfile userProfile = userMap.get(id);
		userProfile.setName(name);
		userProfile.setPhone(phone);
		userProfile.setAddress(address);
	}
	
	@DeleteMapping("/user/{id}")
	public void deleteUserProfile(@PathVariable("id") String id ) {
		userMap.remove(id);
	}
}
```

