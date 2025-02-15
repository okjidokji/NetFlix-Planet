package user.dao;

import java.util.List;
import java.util.Map;

import user.bean.UserDTO;
import user.bean.UserProfileDTO;

public interface UserDAO {

	public UserDTO login(Map<String, String> map);


	public String signUpCheck(UserDTO userDTO);

	public void signUp(UserDTO userDTO);

	public String emailCheck(String user_email);

	public List<UserProfileDTO> getProfileList(Map<String, String> map);

	public UserProfileDTO getProfile(Map<String, String> map);

	public UserProfileDTO addProfile(Map<String, String> map);

	public int getProfileIdSeq();

	public void membershipUp(Map<String, String> map);

	public void insertBilling(Map<String, String> map);

	public int getPayType();

	public void deleteProfile(Map<String, String> map);

	public void updateProfile(Map<String, String> map);

	public UserDTO findPwd(Map<String, String> map);


	public void updatePwd(Map<String, String> map);


	public List<UserDTO> findEmail(Map<String, String> map);
	

	public UserDTO getUSER(String user_email);


	public String priceMethod(String user_email);


	public int getMembership(String user_email);


	public int getPaySeq();


	public void changeEmail(Map<String, String> map);


	public int checkPhone(UserDTO userDTO);


	public void changePhone(UserDTO userDTO);


	public void myPageUpdatePwd(Map<String, String> map);


	public List<UserDTO> findPassWord(Map<String, String> map);



}
