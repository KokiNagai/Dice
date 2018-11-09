require 'test_helper'

class NormalsControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get normals_home_url
    assert_response :success
  end

end
